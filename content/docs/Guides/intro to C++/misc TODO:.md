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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRZ2MUG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEqSnZa9uSlb5dAAZhe6FnARCScvFJuY2iR4Z6Mz8vExAiBZhbJbyQRLEXX5sNnkyBom2doJtsOV9rmNOzDyTgw3ISqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLRGq0i70VBCDxlTIKtwDcBwmkr37Z7uDcZibwDf7Ah6eCbuzBx96hawhsr6wCamkk1NUIaRiykpZeAmrg4UqSskOd%2FZosxwrJo54Kcd6en15LLr6wXjhdLwnPap%2Bc7jHWpxtXDhwuxRe8PzBAg1fAZwhOSviMFdnRuTOFPHtNup7BZSfkh0hIMm4AuYK04xIum9TyKFZYF1Qp4LD7lR2%2BGN9iyQwvZNzgG6lzIeZVWZ3gSBxu2WYb%2F8FePd6Cg5MvQKeaaGV3phannT8q9CIRF8101FS70IhB7l1UQOKHlvQQBFi4oJtxoaIVNch2MhQbAx%2FYBZNY2Bg4dh4LLrFkBD29SftLxhEgda9TWhYz2CmvCulHbqaiM0n1AFYOkieiLDjCEt4MVt%2Fon6JxV%2BcVS6YBA0W%2FK7CO3u7bhNHR%2F1KaqtgLreSbTdjeHc41Lcb0Ey6lsMA4yqVECrABDKH6wnMOOchr6yUu9YBAvRuCtYehnp1x9pj5vCFt7v7eyFSZQovcdvKIombh0cke%2FJiGTNIkr1cfm7%2B9ZKNEcPsyibNXArApnC6d8G%2BgG5jG3IXsF2mO57hzayV5X2%2F0tn%2BrN1O9Dt6deRzHW4cmsSmHqEmddfrAlZe4nHSXb9awJEVjc6F1wkQZL5Bd6swmfO2vwY6pgEQ6DHfyKIH5ZeJlmBt2e5tgTs3of75uAyEvS0Fi%2FKf4tFad1egBd0xXVWavQCuHTSIVNqr64kUccWiiyLLHXZFfbkpSgZDWazQSe09lYDNMgfOlgx83ZQQ6tiYen5XjinEdpy9O8tg2GjSQDYCAczlcU%2BD9%2FBSYqQnTiotOOjuV9Jc3eVL5RFiEoSlvHFigqqN%2FIk8p6W1jNspQiqDSCNVLWxFZKrb&X-Amz-Signature=a4891c9e7025f5f44be644b623217f1a7d1e10ec2d36ff13dfb10328644a5faf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRZ2MUG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEqSnZa9uSlb5dAAZhe6FnARCScvFJuY2iR4Z6Mz8vExAiBZhbJbyQRLEXX5sNnkyBom2doJtsOV9rmNOzDyTgw3ISqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLRGq0i70VBCDxlTIKtwDcBwmkr37Z7uDcZibwDf7Ah6eCbuzBx96hawhsr6wCamkk1NUIaRiykpZeAmrg4UqSskOd%2FZosxwrJo54Kcd6en15LLr6wXjhdLwnPap%2Bc7jHWpxtXDhwuxRe8PzBAg1fAZwhOSviMFdnRuTOFPHtNup7BZSfkh0hIMm4AuYK04xIum9TyKFZYF1Qp4LD7lR2%2BGN9iyQwvZNzgG6lzIeZVWZ3gSBxu2WYb%2F8FePd6Cg5MvQKeaaGV3phannT8q9CIRF8101FS70IhB7l1UQOKHlvQQBFi4oJtxoaIVNch2MhQbAx%2FYBZNY2Bg4dh4LLrFkBD29SftLxhEgda9TWhYz2CmvCulHbqaiM0n1AFYOkieiLDjCEt4MVt%2Fon6JxV%2BcVS6YBA0W%2FK7CO3u7bhNHR%2F1KaqtgLreSbTdjeHc41Lcb0Ey6lsMA4yqVECrABDKH6wnMOOchr6yUu9YBAvRuCtYehnp1x9pj5vCFt7v7eyFSZQovcdvKIombh0cke%2FJiGTNIkr1cfm7%2B9ZKNEcPsyibNXArApnC6d8G%2BgG5jG3IXsF2mO57hzayV5X2%2F0tn%2BrN1O9Dt6deRzHW4cmsSmHqEmddfrAlZe4nHSXb9awJEVjc6F1wkQZL5Bd6swmfO2vwY6pgEQ6DHfyKIH5ZeJlmBt2e5tgTs3of75uAyEvS0Fi%2FKf4tFad1egBd0xXVWavQCuHTSIVNqr64kUccWiiyLLHXZFfbkpSgZDWazQSe09lYDNMgfOlgx83ZQQ6tiYen5XjinEdpy9O8tg2GjSQDYCAczlcU%2BD9%2FBSYqQnTiotOOjuV9Jc3eVL5RFiEoSlvHFigqqN%2FIk8p6W1jNspQiqDSCNVLWxFZKrb&X-Amz-Signature=6c243ccc676f4f51d73df1307f8d3e8c63cd8075edd9ccfba1894ec700d3281f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
