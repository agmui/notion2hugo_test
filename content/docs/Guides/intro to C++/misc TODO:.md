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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPZTIBZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExXpjopXR6blo%2B9gli435pe7X65U%2B4llB9Vfpf%2Bitv1AiEAkL1XpPI44i2FruxqNxSqSAg1IbVxlY3cMQfGmzqokyMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJXPT7zFB3cGsgknyrcA%2B7EwcjJNsLmjJ4T9fk3fueqK0w2Dk2xwlSzD3V3sag%2BWwjwEpb%2BcV0nSapGYIml%2Fzb8xJRaKomHAok0QuMZreMWZAWfVo0jBD%2F2pEyaz%2Frh6gL%2FsRGnoxLVBHxx2fHocFBrGiM3egoxXsuquKBFieqVLixdXXgzQCEidPqbXoKPJnLG1Tz7kj1JaloYkHxIY4CRwkMBnmTnVzR7m108prTEMGxZWf7Jrgm6iSIcUT4BuhYaOQ284N%2BzguwbheLtmRU5AI3jV%2B9eKGaAqtu6d10dzO%2F%2BzP%2FjdYAS3SEi5CB0%2BjM2iEasLNom7BuAY0HADkpRmIoeF%2ByPRIsA1gdNcAQW2TP%2B01Rt4h46HbubXo6zOiXodBdPcOjRMbNnGc2qazKpWHfd8QrWbW0q3m94ijbBbL0ZT0Qo%2FD4PN4W0M2Wf0VkBPjKizDS6x%2B6rjN31bJzsI5A3WEoe%2FvlN8IWbM3sypGoitNUQj6N3waJ9PrKlp4OKmmEa95bVj6IQoTFb5bWvZTODDPoOtiXhft7Sx%2BYSKZ07Zx5kxsvjLtuJxDk3w3%2Fffrbw0m%2BAbJ99ggNEMaLf4cUVnT71Nr7%2F6GY3JPMVU0EMZfn6j%2BqIdrdY6bxuofy9KtWc2ak%2F%2Bts%2BMNGQhb8GOqUBnbMYA2RXTySpTZJpNelW9eSk8%2Fbiw1xBKAMtLGeGmS91VGhO%2B1wbsl%2BehzaDW68SWcDp99zP87eSjv3HJJ7yJnWIrj5Wde6%2B7Rsavour8wBw%2Fkw06ypAhsKKNirBfRM5AQDcCvX7pXBRyFOAN%2FdU6aEOqHLRMTGGKHopc5Py0EAXmOjB5fMsYHcYw0NMX0HUxhzTwEUTQeXd0ApJfWcZDEyvQs%2B4&X-Amz-Signature=d822bf039848479795fc039aa79db95841e66f6c332c9233dcd1d210fabef510&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPZTIBZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExXpjopXR6blo%2B9gli435pe7X65U%2B4llB9Vfpf%2Bitv1AiEAkL1XpPI44i2FruxqNxSqSAg1IbVxlY3cMQfGmzqokyMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJXPT7zFB3cGsgknyrcA%2B7EwcjJNsLmjJ4T9fk3fueqK0w2Dk2xwlSzD3V3sag%2BWwjwEpb%2BcV0nSapGYIml%2Fzb8xJRaKomHAok0QuMZreMWZAWfVo0jBD%2F2pEyaz%2Frh6gL%2FsRGnoxLVBHxx2fHocFBrGiM3egoxXsuquKBFieqVLixdXXgzQCEidPqbXoKPJnLG1Tz7kj1JaloYkHxIY4CRwkMBnmTnVzR7m108prTEMGxZWf7Jrgm6iSIcUT4BuhYaOQ284N%2BzguwbheLtmRU5AI3jV%2B9eKGaAqtu6d10dzO%2F%2BzP%2FjdYAS3SEi5CB0%2BjM2iEasLNom7BuAY0HADkpRmIoeF%2ByPRIsA1gdNcAQW2TP%2B01Rt4h46HbubXo6zOiXodBdPcOjRMbNnGc2qazKpWHfd8QrWbW0q3m94ijbBbL0ZT0Qo%2FD4PN4W0M2Wf0VkBPjKizDS6x%2B6rjN31bJzsI5A3WEoe%2FvlN8IWbM3sypGoitNUQj6N3waJ9PrKlp4OKmmEa95bVj6IQoTFb5bWvZTODDPoOtiXhft7Sx%2BYSKZ07Zx5kxsvjLtuJxDk3w3%2Fffrbw0m%2BAbJ99ggNEMaLf4cUVnT71Nr7%2F6GY3JPMVU0EMZfn6j%2BqIdrdY6bxuofy9KtWc2ak%2F%2Bts%2BMNGQhb8GOqUBnbMYA2RXTySpTZJpNelW9eSk8%2Fbiw1xBKAMtLGeGmS91VGhO%2B1wbsl%2BehzaDW68SWcDp99zP87eSjv3HJJ7yJnWIrj5Wde6%2B7Rsavour8wBw%2Fkw06ypAhsKKNirBfRM5AQDcCvX7pXBRyFOAN%2FdU6aEOqHLRMTGGKHopc5Py0EAXmOjB5fMsYHcYw0NMX0HUxhzTwEUTQeXd0ApJfWcZDEyvQs%2B4&X-Amz-Signature=401a44bf9edd3609c02a519e30fa06467aaea0f4349b1a5cfa953bcbde35b69c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
