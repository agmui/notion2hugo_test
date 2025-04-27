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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIGU43M%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcGk8t61j0m8%2BWOhMJp8WIAQj5CxMXooGBitEoj0aL5QIgbqYatoYskF%2Fs8tugX%2BVhgafMMHSM56BRmsfb%2FhWjRscq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLtxi6Dkb%2BtGOVWJ%2BSrcA%2BH8dqqezD6FM38ncVuoeheVtXFbE84WKw6819UrX%2Bn%2FJNHukn2iKeuOGawrif0JhyhdoOs8YQ2y01f7JhP1fkEt1Dyb9xD29RX7mgjCOsrHitD5vABryfu9NIiotOkkKDCCABmgzC1yUrtm1K2dy4vRmcoZ8FyRKdDe%2FbwspPWC5WQ9Cmqpxm4AH25tu33aMCBeDR%2FB8t%2F%2BCdfj5NBANB0FwACwL01rBI8MqQJKO%2BOYFQgKB9bb1ZxsqZUv5azDnOnZj9Ib72UkgdJCgk81N6rdcLRUrvdAog2O7C6gTDlwfuN2V3TXGPQHDJ1KRr7lS2zFR3QEdItu1rJYUIDCN1tK5eVE%2FL6TZpGoxt0bzz6mmZT4EpY0UZNF%2F5QjqIY8yYK1Rm%2B7%2BAkBDxVgsADZM3b0%2Fx66tR%2Fzl0bNUkRTu1mU6FxIyMQ0oIuQ1skYRJer7rSwIhE8QlvndjN2bTlM5oNdDz1wWkiecd0VUni1gzvmnF3K1HcIkulja5g9xTsespr%2FDUDbi7pBhmWDymk1D7z6t0XuHdejGnaZEOA961LyKuqaJKsIXdXOrxgcdrOgxngIeRa1A3BmCIQkxiZVU00Q6vvo9nnlgo0NLWK6JKBTN3v4BKp0HpCJzff7MJOMuMAGOqUBiahY77khCcCtXSXAaJDpJA296O2nHD2b%2F4Mgl1skEbrRcy8%2Fo90R54%2BibEIHAhBqJfzI2oLtA1lFof9%2FLVaalwLGhC12WQED%2FBdNKVEbGGZbiqCdaW20Ge7Gyx2mtK9dltkX1mrw4e7GimSws6awY5OPcle0t8ByViT%2Bg4lucWjxpJWX0GzcDYH7pmTOz6xhjihuQSjLkhROttbC0Mu3lyI2%2BYNq&X-Amz-Signature=9bd42c8f9297a819b9fc835c1dbb0045b7e15df622db04670304e4e472a6bc9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIGU43M%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcGk8t61j0m8%2BWOhMJp8WIAQj5CxMXooGBitEoj0aL5QIgbqYatoYskF%2Fs8tugX%2BVhgafMMHSM56BRmsfb%2FhWjRscq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLtxi6Dkb%2BtGOVWJ%2BSrcA%2BH8dqqezD6FM38ncVuoeheVtXFbE84WKw6819UrX%2Bn%2FJNHukn2iKeuOGawrif0JhyhdoOs8YQ2y01f7JhP1fkEt1Dyb9xD29RX7mgjCOsrHitD5vABryfu9NIiotOkkKDCCABmgzC1yUrtm1K2dy4vRmcoZ8FyRKdDe%2FbwspPWC5WQ9Cmqpxm4AH25tu33aMCBeDR%2FB8t%2F%2BCdfj5NBANB0FwACwL01rBI8MqQJKO%2BOYFQgKB9bb1ZxsqZUv5azDnOnZj9Ib72UkgdJCgk81N6rdcLRUrvdAog2O7C6gTDlwfuN2V3TXGPQHDJ1KRr7lS2zFR3QEdItu1rJYUIDCN1tK5eVE%2FL6TZpGoxt0bzz6mmZT4EpY0UZNF%2F5QjqIY8yYK1Rm%2B7%2BAkBDxVgsADZM3b0%2Fx66tR%2Fzl0bNUkRTu1mU6FxIyMQ0oIuQ1skYRJer7rSwIhE8QlvndjN2bTlM5oNdDz1wWkiecd0VUni1gzvmnF3K1HcIkulja5g9xTsespr%2FDUDbi7pBhmWDymk1D7z6t0XuHdejGnaZEOA961LyKuqaJKsIXdXOrxgcdrOgxngIeRa1A3BmCIQkxiZVU00Q6vvo9nnlgo0NLWK6JKBTN3v4BKp0HpCJzff7MJOMuMAGOqUBiahY77khCcCtXSXAaJDpJA296O2nHD2b%2F4Mgl1skEbrRcy8%2Fo90R54%2BibEIHAhBqJfzI2oLtA1lFof9%2FLVaalwLGhC12WQED%2FBdNKVEbGGZbiqCdaW20Ge7Gyx2mtK9dltkX1mrw4e7GimSws6awY5OPcle0t8ByViT%2Bg4lucWjxpJWX0GzcDYH7pmTOz6xhjihuQSjLkhROttbC0Mu3lyI2%2BYNq&X-Amz-Signature=9c6bf5ad569a52e11cb9e9c484c98bdacb238704257deca77da66d6be2ee276b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
