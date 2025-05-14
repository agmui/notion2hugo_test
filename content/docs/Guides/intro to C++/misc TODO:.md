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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBRTKSU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHWGlb0kixAYIAGNleI9vUFX%2FClTppSlqDt0YzInuinGAiEAm3cxaMXaXB8rz7DUHz%2Fst0sS867OsEIj50jiNJ6jwEYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLY8GkTUEbMh%2Fr7gXCrcA99Gu3aG2MvQFZ32Ba10t8iNxFfdDLd%2BjQ2MFVn%2Bi3m3uZiJ%2B%2BBdURtgNzmQymPz2PIo1YnxHD1I4uoAl4Po7GRNSD6lhmQ%2BfRofBJqbw1MmOgxL%2B8D5nfXYOMg3u7IXA8fPmZV6LlNRKr5oC8OTH7SX%2B8Ms35aJ5URGGKTSMdJYw9n1w%2FVI%2BN4SiOU%2B8JMlPYn8pdf8aNtgkjGiBaXIZxKC67h8Bb5%2FTKeb0yCVCGFsFtt%2FxT9mTqyz%2BhdPKawsImizvRa7OHA2lkNhUwB3YfvgV2J2wy4v5m%2FLFXLM7xIRA9cHtvBupm2Nz2v1edCrw9cF4ErfLf9f8I%2F6iR1fO2GJN3XeiOuhiQTnQvcejg3DGDPF5%2BnryzQ8f6MVVqhdgt3sMS%2Bu%2FajpSmmNBqPbcLum%2BZV8wBLiB8aIe%2Bv%2BLRLYSrlVkKZEQAHI7XToQ2is7wZxD6btvLRYfwQzxEJfzkdptggbxv1jIQB9FXHiuMUx3auUByNFucWO8lOWWbkWq9rPA0GjLh8nGIn3rAEcKSLrY6%2Frxm75FsG1ZS8cbUO6yg4E%2Br3lcBC9eoq2p7BVPSjfvqVQBlK4ZgsQ9Omt9Ls7CFxRE0UIQA9n0q1zuWCwVp3fFQdXExe%2FuYLbMI2hkMEGOqUBjjaNlsWYfgM1ulL7NCGdYNd1N7G3RlcScZJ3GhzHRioKuUpbpfrGJ7w2gmdcHzt16W9pChsfjS7%2BnI8G5LgxYsxZrzqRB9LKnExosfebYt3W1UTjx9iWEstFLKvNj%2Bl6Jk47ypMBsnpek9sE8uI67uE4Rg%2BxsPR7fDuwVURGveEU58odl%2Bf64tD74RhukMFJ2m1LHPWZK57f27WDIOI103QKaPwB&X-Amz-Signature=fe047437f834c5b5a15bb7d08da9be1772a32be39cfdb1a77af124fb231376b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBRTKSU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHWGlb0kixAYIAGNleI9vUFX%2FClTppSlqDt0YzInuinGAiEAm3cxaMXaXB8rz7DUHz%2Fst0sS867OsEIj50jiNJ6jwEYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLY8GkTUEbMh%2Fr7gXCrcA99Gu3aG2MvQFZ32Ba10t8iNxFfdDLd%2BjQ2MFVn%2Bi3m3uZiJ%2B%2BBdURtgNzmQymPz2PIo1YnxHD1I4uoAl4Po7GRNSD6lhmQ%2BfRofBJqbw1MmOgxL%2B8D5nfXYOMg3u7IXA8fPmZV6LlNRKr5oC8OTH7SX%2B8Ms35aJ5URGGKTSMdJYw9n1w%2FVI%2BN4SiOU%2B8JMlPYn8pdf8aNtgkjGiBaXIZxKC67h8Bb5%2FTKeb0yCVCGFsFtt%2FxT9mTqyz%2BhdPKawsImizvRa7OHA2lkNhUwB3YfvgV2J2wy4v5m%2FLFXLM7xIRA9cHtvBupm2Nz2v1edCrw9cF4ErfLf9f8I%2F6iR1fO2GJN3XeiOuhiQTnQvcejg3DGDPF5%2BnryzQ8f6MVVqhdgt3sMS%2Bu%2FajpSmmNBqPbcLum%2BZV8wBLiB8aIe%2Bv%2BLRLYSrlVkKZEQAHI7XToQ2is7wZxD6btvLRYfwQzxEJfzkdptggbxv1jIQB9FXHiuMUx3auUByNFucWO8lOWWbkWq9rPA0GjLh8nGIn3rAEcKSLrY6%2Frxm75FsG1ZS8cbUO6yg4E%2Br3lcBC9eoq2p7BVPSjfvqVQBlK4ZgsQ9Omt9Ls7CFxRE0UIQA9n0q1zuWCwVp3fFQdXExe%2FuYLbMI2hkMEGOqUBjjaNlsWYfgM1ulL7NCGdYNd1N7G3RlcScZJ3GhzHRioKuUpbpfrGJ7w2gmdcHzt16W9pChsfjS7%2BnI8G5LgxYsxZrzqRB9LKnExosfebYt3W1UTjx9iWEstFLKvNj%2Bl6Jk47ypMBsnpek9sE8uI67uE4Rg%2BxsPR7fDuwVURGveEU58odl%2Bf64tD74RhukMFJ2m1LHPWZK57f27WDIOI103QKaPwB&X-Amz-Signature=b81e47e4aace19796b849edf7a323732b8e198b1bb0c2db889207386c835a997&X-Amz-SignedHeaders=host&x-id=GetObject)

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
