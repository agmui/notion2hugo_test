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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3N5PDTH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDr7WdHTwUTLZ55oM56JK0IyDKW1AShPHypFq8pv%2Fz9KAIhAKmfwdXsGTgkuw6O%2FAf75mPOXxMaY%2FL18L1Z0yy%2FDfIkKv8DCF0QABoMNjM3NDIzMTgzODA1Igy8d3W37CMPvC%2BxtyAq3AM16Q7AjNOZD161M2nK5vAY%2BMIcTvLlby7ooRZ5jakOj7AJXDz4mZTKo%2F99M6zXJLf9UAwr5X9kH7HHccTl05Fz%2FKp4xqSg7ytqMR6P3BzCj8Uybsx%2BkwF2hJooe9JFJZn4Uljn2r2wWC%2Fg7xGchFg78QOwyvUp41sgB%2FrMHdwcVRZIVfNs7ZeueW7dFzZPnjv6pihecnTAirQmHN4vGoYTHdw%2B%2FinMHdEyR7i7%2BxRBPJSlbyUE6EVbFn1PtObRRh5MYu4zdqyghKULachzFhHragCj%2B%2F2nOPF1Npa4r5mcWyj0NVWUIoYjCZtlLi%2BSXRFKF3hUb8AdD%2FnwbbYN6bx1HDAvMSDiPEOU70XfnnpgNFjUsTDzvZu730xQMYwhw2%2FMPloVVeFIWIaR9FHdHo%2Fg9W%2FCPdrEe8pGDccNfD0%2B9wbqbDmIgY%2FfhkOlNqBncI1KZGknbkvj58wh1zzSixw9pQvhhboFna%2Fmt0KReoc1G8P4zDJuMsCl3i4AUOAvpl3eZz1hUGGu4bjeSp5IrbZyISHG68mWRQh67NYZy8NsfWB%2FM%2BhgG%2BU6aiIhoZS%2BvUFJDn6PV5pQHUJl26mAheHyVFUmycVH5vMclQzYO4FYexl816svRyEkGDVzKzDeh%2Fy9BjqkARZQp06tSc7%2Bm1kfuDpiHoD%2B0PGxqt9H6PzIezAVastZo28%2BI%2FOmDbhkFV3U2NnWzYuGGX1CXnW80mB4pZMV9QpsH6JXdiU8DEcgdWDWSucjydbpnNSxc4z3f0QWLsS1uY7LglUCMWnK6PsVzDEGMJHH9vVUf7AfeU13cJel%2BF7NmeYiNGtC8I1f30lfwhVbR%2FJv79g8G7%2BPFIhVYnrPwGCk75BJ&X-Amz-Signature=657eda96e9318eaf236cd72ee0849f1423065d5f0f077cc6cd9fd9b002869f21&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3N5PDTH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDr7WdHTwUTLZ55oM56JK0IyDKW1AShPHypFq8pv%2Fz9KAIhAKmfwdXsGTgkuw6O%2FAf75mPOXxMaY%2FL18L1Z0yy%2FDfIkKv8DCF0QABoMNjM3NDIzMTgzODA1Igy8d3W37CMPvC%2BxtyAq3AM16Q7AjNOZD161M2nK5vAY%2BMIcTvLlby7ooRZ5jakOj7AJXDz4mZTKo%2F99M6zXJLf9UAwr5X9kH7HHccTl05Fz%2FKp4xqSg7ytqMR6P3BzCj8Uybsx%2BkwF2hJooe9JFJZn4Uljn2r2wWC%2Fg7xGchFg78QOwyvUp41sgB%2FrMHdwcVRZIVfNs7ZeueW7dFzZPnjv6pihecnTAirQmHN4vGoYTHdw%2B%2FinMHdEyR7i7%2BxRBPJSlbyUE6EVbFn1PtObRRh5MYu4zdqyghKULachzFhHragCj%2B%2F2nOPF1Npa4r5mcWyj0NVWUIoYjCZtlLi%2BSXRFKF3hUb8AdD%2FnwbbYN6bx1HDAvMSDiPEOU70XfnnpgNFjUsTDzvZu730xQMYwhw2%2FMPloVVeFIWIaR9FHdHo%2Fg9W%2FCPdrEe8pGDccNfD0%2B9wbqbDmIgY%2FfhkOlNqBncI1KZGknbkvj58wh1zzSixw9pQvhhboFna%2Fmt0KReoc1G8P4zDJuMsCl3i4AUOAvpl3eZz1hUGGu4bjeSp5IrbZyISHG68mWRQh67NYZy8NsfWB%2FM%2BhgG%2BU6aiIhoZS%2BvUFJDn6PV5pQHUJl26mAheHyVFUmycVH5vMclQzYO4FYexl816svRyEkGDVzKzDeh%2Fy9BjqkARZQp06tSc7%2Bm1kfuDpiHoD%2B0PGxqt9H6PzIezAVastZo28%2BI%2FOmDbhkFV3U2NnWzYuGGX1CXnW80mB4pZMV9QpsH6JXdiU8DEcgdWDWSucjydbpnNSxc4z3f0QWLsS1uY7LglUCMWnK6PsVzDEGMJHH9vVUf7AfeU13cJel%2BF7NmeYiNGtC8I1f30lfwhVbR%2FJv79g8G7%2BPFIhVYnrPwGCk75BJ&X-Amz-Signature=c2cdbcf6de625c900197ed2cd14f1c0748ca3ea5de6fac001eedf941ae84585c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
