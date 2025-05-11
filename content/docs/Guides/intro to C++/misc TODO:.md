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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTG26DR2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDx%2F84Y1i7SwcqdUE9uwCudIRSdYuQ73gGFrhnsqwzHYgIhAP2wj4tYBzAIztedSDxETcHh4HymQk%2B9FykFlAe86ysaKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhMeeN0hynv9iBTYYq3AMI6pe29o6BGnJC%2B9cNgWxljXIv2XatAY0yWJJL%2B0XwbCG4QK6x%2FDTZZm1NNRViXCZdEs%2Bl2u8ixZOBO40FxCaj0ZJ7U%2Fm612H5siiMsVvvLP61DCo6NRhtQXUXAUMcT7vBn49TQG0bYPonlGSpnT6giEfmGIgOSVkczfFXdvoOznojyfGcHo2XBBaIK0%2BC5X8fjckgyOmvBnNQT1an2oZqFtVdzSpH%2BPbZVanDQNLhQlbnDd43S2JZDgHcx92O%2FXtbfy%2FNNYPcI%2BzOG%2Bb%2BrhCIO0ZitqSqnXsxDylAHSYI9HzAaTB%2BOIPDwRYRpVrs%2FtTwYeQ9UByZ%2BIslAGr8maQUFATaKL7HgW6MeriNjfOcrm84OR%2BEjIohopMlQSNqx%2BdcIjUvJV5QqN4R1w1oIRlGn8GAfPZBN05KI7m6cSS9Pxw2N3xfAitybNh8yG8xNBwYHX%2B2i%2BsQAtV%2BkIID8jS4%2F5bWmfEscwoxIhCIFagdn3ACLto%2FJcA0MPaY8NftvF9OVbxjbDM7SCjs814VHIOE%2BOA1H1AxKj25JkSig65LSBI6YzaVIZW%2FyKo05kCPYamtSLYJl6NB%2BdzgfwGIsoADagCHmxOWwHkoA84P5%2BAUWZuH7I%2BHEuRwqCXFJjDf3oDBBjqkAT6WZ0kRVjUZDoK34sZOAroGyahI0wlOrLZ4rAE%2F2Y%2BBCVVjtzHeWcM6u9e28bsKyfC8d9FAKTc02FzVi49bKxWyIFs4QAQuiVNwtNZO5rkrQmD%2F52nuHyiDy6Ku1tAv%2BmStdrMoWmRX6aL%2FdxnVvA2h1matYmCZpVP3rEqXKATOJ5oL2CyWW8cH9ocyxyBSXyU3WIuE2RNuQ1grzrpdnJ%2BBrNru&X-Amz-Signature=4b2e03150db48e04e97c4849ca6883c82346bc958471dcaa56c499d63c294711&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTG26DR2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDx%2F84Y1i7SwcqdUE9uwCudIRSdYuQ73gGFrhnsqwzHYgIhAP2wj4tYBzAIztedSDxETcHh4HymQk%2B9FykFlAe86ysaKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhMeeN0hynv9iBTYYq3AMI6pe29o6BGnJC%2B9cNgWxljXIv2XatAY0yWJJL%2B0XwbCG4QK6x%2FDTZZm1NNRViXCZdEs%2Bl2u8ixZOBO40FxCaj0ZJ7U%2Fm612H5siiMsVvvLP61DCo6NRhtQXUXAUMcT7vBn49TQG0bYPonlGSpnT6giEfmGIgOSVkczfFXdvoOznojyfGcHo2XBBaIK0%2BC5X8fjckgyOmvBnNQT1an2oZqFtVdzSpH%2BPbZVanDQNLhQlbnDd43S2JZDgHcx92O%2FXtbfy%2FNNYPcI%2BzOG%2Bb%2BrhCIO0ZitqSqnXsxDylAHSYI9HzAaTB%2BOIPDwRYRpVrs%2FtTwYeQ9UByZ%2BIslAGr8maQUFATaKL7HgW6MeriNjfOcrm84OR%2BEjIohopMlQSNqx%2BdcIjUvJV5QqN4R1w1oIRlGn8GAfPZBN05KI7m6cSS9Pxw2N3xfAitybNh8yG8xNBwYHX%2B2i%2BsQAtV%2BkIID8jS4%2F5bWmfEscwoxIhCIFagdn3ACLto%2FJcA0MPaY8NftvF9OVbxjbDM7SCjs814VHIOE%2BOA1H1AxKj25JkSig65LSBI6YzaVIZW%2FyKo05kCPYamtSLYJl6NB%2BdzgfwGIsoADagCHmxOWwHkoA84P5%2BAUWZuH7I%2BHEuRwqCXFJjDf3oDBBjqkAT6WZ0kRVjUZDoK34sZOAroGyahI0wlOrLZ4rAE%2F2Y%2BBCVVjtzHeWcM6u9e28bsKyfC8d9FAKTc02FzVi49bKxWyIFs4QAQuiVNwtNZO5rkrQmD%2F52nuHyiDy6Ku1tAv%2BmStdrMoWmRX6aL%2FdxnVvA2h1matYmCZpVP3rEqXKATOJ5oL2CyWW8cH9ocyxyBSXyU3WIuE2RNuQ1grzrpdnJ%2BBrNru&X-Amz-Signature=9c51ed83fc7bb0dc6cfaec84d50c2060ca350bc679d4969c7afbe022a9926a43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
