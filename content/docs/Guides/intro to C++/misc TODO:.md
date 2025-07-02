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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGC4O66N%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcMXBorVMm7%2Bd6gL7gjgz8qP4hWnv9F8%2FbOIJ3sEfrJAiEAqKPp%2FbWhpH%2Bv4TKNwoVgJNOlCD71nKEzE82bsKSkQMAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj25IHnzrHOby7jLircA7q2EN%2FZb55FbuVO3OkMgv9jUn0g8jR7C8Wo1NgEckV20Jl1Mz8K64j4SuaIKL13rhzTIshLIrhmxadzCeiJ3miH3ATAgZCA64z9OMvbDts9xeBwCB0w4fw2Hs0aFeDj%2FSWwaijik2MbgaW1Qr73pjpCkgPyNpNrZY33fpobu2%2FAJIZ6i04Va7PDll%2B3p6dN1qA9cw%2B3s%2BdhOTYRLiser27MefpCv5KthmEHB2jSSeBLXzhZhEmphvrfEu4j2%2Bo36x9QWhpuT5hLKehuQQV74zN9ffeJSTeMArD4KR%2B5LF96bffOrbyKLtT936h%2BqN3mYb5dB%2FNyHtTYh114vQzy15if2abMOTY%2FyYuBQDRDSm5BKzAZgWEsFg2pm0Q9X%2BmpIBwjTKxdHclM%2FMZS6t1X%2FFT6FaLnqL341r0gu1q9I4HzoscF%2BmgwW17CGVXvGQiFbm%2B68HINYRmupMqpl3i4bP8YZsSOwEY5K7KTox8%2B%2BkuUn0BwtBmGRPDL3Xq4G62NgHFVSc8mIfWX5U%2Bl4eJFlxZIbm64u1jmfODfWepfmz77HsBjnqxvc1KkasV1i8txFVVDrgLTe8bdwTKhy41OA0MFdnJgW%2Bv0kYPLMUW69SfheWWURzyuE6tWdt4VMLLik8MGOqUBlawKpgsaUzdW6eLeO%2BSXGj0rWsQqKpQcGYiuXPvkq2VQolh5ul9jx0ejtZVnmU6AQorLV52A8RUpEeVNX8BCIvCIUCFejVCCn0%2FpB1oQH80k%2FfU3YDLa2wiRQ76YnrPyPEw5BR0gvV17YTPxiNYuk5AeIMYw4VAR4r0nDcyMpdV6aW73mOHsoJ35Rle4lbO%2BRsJWhVqyIe4opFr1nblHTLIrPTT3&X-Amz-Signature=ce803c3ad1110fb3f1527e95433defd0619d2b5bed8e73c887a3a03fa35e56d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGC4O66N%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcMXBorVMm7%2Bd6gL7gjgz8qP4hWnv9F8%2FbOIJ3sEfrJAiEAqKPp%2FbWhpH%2Bv4TKNwoVgJNOlCD71nKEzE82bsKSkQMAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj25IHnzrHOby7jLircA7q2EN%2FZb55FbuVO3OkMgv9jUn0g8jR7C8Wo1NgEckV20Jl1Mz8K64j4SuaIKL13rhzTIshLIrhmxadzCeiJ3miH3ATAgZCA64z9OMvbDts9xeBwCB0w4fw2Hs0aFeDj%2FSWwaijik2MbgaW1Qr73pjpCkgPyNpNrZY33fpobu2%2FAJIZ6i04Va7PDll%2B3p6dN1qA9cw%2B3s%2BdhOTYRLiser27MefpCv5KthmEHB2jSSeBLXzhZhEmphvrfEu4j2%2Bo36x9QWhpuT5hLKehuQQV74zN9ffeJSTeMArD4KR%2B5LF96bffOrbyKLtT936h%2BqN3mYb5dB%2FNyHtTYh114vQzy15if2abMOTY%2FyYuBQDRDSm5BKzAZgWEsFg2pm0Q9X%2BmpIBwjTKxdHclM%2FMZS6t1X%2FFT6FaLnqL341r0gu1q9I4HzoscF%2BmgwW17CGVXvGQiFbm%2B68HINYRmupMqpl3i4bP8YZsSOwEY5K7KTox8%2B%2BkuUn0BwtBmGRPDL3Xq4G62NgHFVSc8mIfWX5U%2Bl4eJFlxZIbm64u1jmfODfWepfmz77HsBjnqxvc1KkasV1i8txFVVDrgLTe8bdwTKhy41OA0MFdnJgW%2Bv0kYPLMUW69SfheWWURzyuE6tWdt4VMLLik8MGOqUBlawKpgsaUzdW6eLeO%2BSXGj0rWsQqKpQcGYiuXPvkq2VQolh5ul9jx0ejtZVnmU6AQorLV52A8RUpEeVNX8BCIvCIUCFejVCCn0%2FpB1oQH80k%2FfU3YDLa2wiRQ76YnrPyPEw5BR0gvV17YTPxiNYuk5AeIMYw4VAR4r0nDcyMpdV6aW73mOHsoJ35Rle4lbO%2BRsJWhVqyIe4opFr1nblHTLIrPTT3&X-Amz-Signature=3b93cbb32cf4aa92ef8e347e353392d235cf211e5c023870d48bf25be88f8b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
