---
title: Lint Rule jsx/noCommentText
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation:
	key: lint-rules/jsx/noCommentText
	parent: lint-rules
	title: jsx/noCommentText
---

# jsx/noCommentText

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS hash(c32ddcdc7c49aaf89fc5d826564cde3e448f0e55) -->

## Examples
### Invalid
<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> <<span class="token attr-name">div</span>>// comment<<span class="token operator">/</span><span class="token attr-name">div</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1:15</span> <strong>lint/jsx/noCommentText</strong> <span style="color: white; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Wrap </span><span style="color: Tomato;"><strong>comments</strong></span><span style="color: Tomato;"> inside children within </span><span style="color: Tomato;"><strong>braces</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> &lt;<span class="token attr-name">div</span>&gt;// comment&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;
                   <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">JavaScript comment sequences are not supported by JSX and result in</span>
    <span style="color: DodgerBlue;">unwanted characters on-screen.</span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Recommended fix</span>

  <span style="color: Tomato;">-</span> <span style="color: Tomato;"><strong>/</strong></span><span style="color: Tomato;">/</span><span style="color: Tomato;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: Tomato;">comment</span>
  <span style="color: MediumSeaGreen;">+</span> <span style="color: MediumSeaGreen;"><strong>{</strong></span><span style="color: MediumSeaGreen;">/</span><span style="color: MediumSeaGreen;"><strong>**</strong></span><span style="color: MediumSeaGreen;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: MediumSeaGreen;">comment</span><span style="color: MediumSeaGreen;"><strong>*/}</strong></span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> <<span class="token attr-name">div</span>>/* comment */<<span class="token operator">/</span><span class="token attr-name">div</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1:15</span> <strong>lint/jsx/noCommentText</strong> <span style="color: white; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Wrap </span><span style="color: Tomato;"><strong>comments</strong></span><span style="color: Tomato;"> inside children within </span><span style="color: Tomato;"><strong>braces</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> &lt;<span class="token attr-name">div</span>&gt;/* comment */&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;
                   <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">JavaScript comment sequences are not supported by JSX and result in</span>
    <span style="color: DodgerBlue;">unwanted characters on-screen.</span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Recommended fix</span>

  <span style="color: Tomato;">-</span> <span style="color: Tomato;">/*</span><span style="color: Tomato;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: Tomato;">comment</span><span style="color: Tomato;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: Tomato;">*/</span>
  <span style="color: MediumSeaGreen;">+</span> <span style="color: MediumSeaGreen;"><strong>{</strong></span><span style="color: MediumSeaGreen;">/</span><span style="color: MediumSeaGreen;"><strong>*</strong></span><span style="color: MediumSeaGreen;">*</span><span style="color: MediumSeaGreen;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: MediumSeaGreen;">comment</span><span style="color: MediumSeaGreen;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: MediumSeaGreen;">*/</span><span style="color: MediumSeaGreen;"><strong>}</strong></span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> <<span class="token attr-name">div</span>>/** comment */<<span class="token operator">/</span><span class="token attr-name">div</span>></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.tsx:1:15</span> <strong>lint/jsx/noCommentText</strong> <span style="color: white; background-color: #ddd;"> FIXABLE </span> ━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Wrap </span><span style="color: Tomato;"><strong>comments</strong></span><span style="color: Tomato;"> inside children within </span><span style="color: Tomato;"><strong>braces</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> &lt;<span class="token attr-name">div</span>&gt;/** comment */&lt;<span class="token operator">/</span><span class="token attr-name">div</span>&gt;
                   <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">JavaScript comment sequences are not supported by JSX and result in</span>
    <span style="color: DodgerBlue;">unwanted characters on-screen.</span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Recommended fix</span>

  <span style="color: Tomato;">-</span> <span style="color: Tomato;">/**</span><span style="color: Tomato;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: Tomato;">comment</span><span style="color: Tomato;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: Tomato;">*/</span>
  <span style="color: MediumSeaGreen;">+</span> <span style="color: MediumSeaGreen;"><strong>{</strong></span><span style="color: MediumSeaGreen;">/**</span><span style="color: MediumSeaGreen;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: MediumSeaGreen;">comment</span><span style="color: MediumSeaGreen;"><span style="opacity: 0.8;">&middot;</span>"</span><span style="color: MediumSeaGreen;">*/</span><span style="color: MediumSeaGreen;"><strong>}</strong></span>

</code></pre>
### Valid
<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> <<span class="token attr-name">div</span>><span class="token punctuation">{</span><span class="token comment">/* comment */</span><span class="token punctuation">}</span><<span class="token operator">/</span><span class="token attr-name">div</span>></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> <<span class="token attr-name">div</span>><span class="token punctuation">{</span><span class="token comment">/** comment */</span><span class="token punctuation">}</span><<span class="token operator">/</span><span class="token attr-name">div</span>></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">const</span> <span class="token variable">a</span> <span class="token operator">=</span> <<span class="token attr-name">div</span> <span class="token attr-name">className</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;cls&quot;</span> <span class="token comment">/* comment */</span><span class="token punctuation">}</span>><<span class="token operator">/</span><span class="token attr-name">div</span>></code></pre>
