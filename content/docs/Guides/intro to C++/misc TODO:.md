---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y6HHOF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFqko9ehQ4dgPBvhDEfUSHh%2B%2Bf8RXlEm%2FCPUgeuU1IwAAiAjgsVn%2FW1Zvwg0Jwm8p46Ah37FIG6g7f5ayErwpclPKiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyamVJYQnFLXM3ptRKtwDgx40NNWQo6LgmpVjfSZKg7JzkPdmVwnlbsV8jeaNhoJ7rS8%2FZqy8NINAb42y6h1feGpIvzcyFNOQbantEFjv61rZidcZcBXlk844wafNeGBrWtbxuXssgxa4vonsKkM7vq12nch02drjALPS1m85T20UrbbVclkfW21ZQ5ZhYGbOtCkxGfUw6nhHnQMVAjjAvuzFc0CE11BolUtDFt47bUpJmTgrHGTet77Dt%2BUt5ILEA0BOF7iT3myiSc1oszp9KnfH4DLM%2BAcvFquM1EsLGyY6idB9EKLNAXk5QfjD8vccMIB0SUG139BnqZcKVyI3QRCWfiCeCraPw57pZZugXw6%2FsJLsK6N4OElxrjdZOWXXBUY0mK6nx6p7TFA5SXgVP3aBzXLaLZfU4u%2B35sH%2B2LsUYZJrqGra0E7r5wniijyDWFMrjB54BHeZlbnMhE0fjI9xsNjpdEBiWwC16F1fNlkxXsnaCz1vsej92jugVlxRfUjE2EYvFzVMwWDvBruSR3xf%2BZi3n%2FZh4p65cPfcuflzVhe9m7NFtPeWZUy6J%2Bbo%2B2ubbiT0KVwYZpUMhBidNC8JRSE3Zu82Yo0LzIpoMC%2BUC8BpNnQx2pnufYiUersZTQGU29MyT1DFD84wgvP%2BvgY6pgHgDPDABD3NANem5wiwJk7UAAqiaiDfk2VA5rijKusy5FNczH5E9z6EYfoIsVC18s9HwgjxLbBhaYDrCJ150gc4qXEhExFCP29hwI1JWkZKzqlXgkj17s9y7KCEYK0id0ZXbZlvN9U2C3CsE5LlDBcwTOZPjr33fgE0mgYIo5T2DvRH%2FNijGKu2%2FeVTXsEDZUkXZZfKXz6y%2FijJhuElb9ovQBWO%2B7i7&X-Amz-Signature=b4ce402401ae726db4166ef7c466ddd76d402148c3826028d0e144177676defe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y6HHOF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFqko9ehQ4dgPBvhDEfUSHh%2B%2Bf8RXlEm%2FCPUgeuU1IwAAiAjgsVn%2FW1Zvwg0Jwm8p46Ah37FIG6g7f5ayErwpclPKiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyamVJYQnFLXM3ptRKtwDgx40NNWQo6LgmpVjfSZKg7JzkPdmVwnlbsV8jeaNhoJ7rS8%2FZqy8NINAb42y6h1feGpIvzcyFNOQbantEFjv61rZidcZcBXlk844wafNeGBrWtbxuXssgxa4vonsKkM7vq12nch02drjALPS1m85T20UrbbVclkfW21ZQ5ZhYGbOtCkxGfUw6nhHnQMVAjjAvuzFc0CE11BolUtDFt47bUpJmTgrHGTet77Dt%2BUt5ILEA0BOF7iT3myiSc1oszp9KnfH4DLM%2BAcvFquM1EsLGyY6idB9EKLNAXk5QfjD8vccMIB0SUG139BnqZcKVyI3QRCWfiCeCraPw57pZZugXw6%2FsJLsK6N4OElxrjdZOWXXBUY0mK6nx6p7TFA5SXgVP3aBzXLaLZfU4u%2B35sH%2B2LsUYZJrqGra0E7r5wniijyDWFMrjB54BHeZlbnMhE0fjI9xsNjpdEBiWwC16F1fNlkxXsnaCz1vsej92jugVlxRfUjE2EYvFzVMwWDvBruSR3xf%2BZi3n%2FZh4p65cPfcuflzVhe9m7NFtPeWZUy6J%2Bbo%2B2ubbiT0KVwYZpUMhBidNC8JRSE3Zu82Yo0LzIpoMC%2BUC8BpNnQx2pnufYiUersZTQGU29MyT1DFD84wgvP%2BvgY6pgHgDPDABD3NANem5wiwJk7UAAqiaiDfk2VA5rijKusy5FNczH5E9z6EYfoIsVC18s9HwgjxLbBhaYDrCJ150gc4qXEhExFCP29hwI1JWkZKzqlXgkj17s9y7KCEYK0id0ZXbZlvN9U2C3CsE5LlDBcwTOZPjr33fgE0mgYIo5T2DvRH%2FNijGKu2%2FeVTXsEDZUkXZZfKXz6y%2FijJhuElb9ovQBWO%2B7i7&X-Amz-Signature=9e859e2e077d82955b2c74895aa3ca93d12bf40da417d7766d23b32086cb3cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
