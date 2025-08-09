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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRETPEOG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBn5nkrhV5GrdD5imX4iJAI3ZI%2Fu464y7i6UQN%2B%2F0cZWAiEAuaP4ictEdo09sCQElf0sbNRTdfqCWrNKDLGqOJA7fggqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFxceHaNo%2F9rrokvircA7eJTamm4uvgdrET14Sgd6tCJOwgkTY9c%2B517E4peHykp4drGwUfwr7UhDTW7OgnJOggOSmZ1enk0QdbW5DSnI3FBDd8I9u5sU9%2FhoOjxxZaLB7Eik5Xy0gL%2BpPwNnsoQYSxYuEy56aKN40t7j5mKLGRtn4zlbvllLZ2F30%2BBLmIGH8TQDPhx%2FzkAGDT7WTkhbHk3wlCM2kEKWFKz1L4h65wqWBgqTJ8WA%2F2fbUwlvrumLwxOXAM0DL0adOgeMJvPCd9BTpnSIFLpQxO22QyTQGBZ24UvgQYVqxKOuc8IDXlfRjM9N4%2B5CivXoW%2BkDgIziak1ex8o143qlZfHOHKS3bGiAlTddYm%2F7BbjOkyOvMg4akYP1b5gkkWTWXlvSkSsN3C1S3Nf1B0F0XnoVYEenRO8JY4XGG1dwFDaD9ZA7LquwWi5MuPhhC%2Bbya8qyYszrUDgaAIFbeEqs4uN1xwnuNTLlbkomMqMQgAeSODxXWeuC%2FRibPGB3LXkLvEVZnVn6G%2BqBILXCy7WHRkhWyKc3wGMEAeLN3%2Bs7f6WdrH%2FgBit3uxhtKd5U0ordFbQ9KmYZW4Wwubq5Eq8Dg1HPe2crT1BAiK1s034bZf7ZmpR2eLe%2F77BC9NMIitmBuAMKTE28QGOqUBRnFdbV4fXFDrjdqtaWBY9Ac6tXim9t%2FYHzxK22ZclFP1RzOY89D99WFi6h%2BkCDvZTejy3dlD2EErGojWX0A3lDlKAp0HMjTem05O4cgcEuJqtOGYhD%2Br1H5%2Ft7Lmuv9PFxQHnoXfiSRpRnWJ%2BTC4VO2qzUNh5f18g0puC7UqwQxS4XYYWMRZDL6kks2wyStQKhl3Dwz9Dm%2FZ59qUo89Oe1%2F3U7Ra&X-Amz-Signature=8bb58d3ed774e849542e727dc22997d83a2921270bc47511eb1ce567cb87cfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRETPEOG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBn5nkrhV5GrdD5imX4iJAI3ZI%2Fu464y7i6UQN%2B%2F0cZWAiEAuaP4ictEdo09sCQElf0sbNRTdfqCWrNKDLGqOJA7fggqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFxceHaNo%2F9rrokvircA7eJTamm4uvgdrET14Sgd6tCJOwgkTY9c%2B517E4peHykp4drGwUfwr7UhDTW7OgnJOggOSmZ1enk0QdbW5DSnI3FBDd8I9u5sU9%2FhoOjxxZaLB7Eik5Xy0gL%2BpPwNnsoQYSxYuEy56aKN40t7j5mKLGRtn4zlbvllLZ2F30%2BBLmIGH8TQDPhx%2FzkAGDT7WTkhbHk3wlCM2kEKWFKz1L4h65wqWBgqTJ8WA%2F2fbUwlvrumLwxOXAM0DL0adOgeMJvPCd9BTpnSIFLpQxO22QyTQGBZ24UvgQYVqxKOuc8IDXlfRjM9N4%2B5CivXoW%2BkDgIziak1ex8o143qlZfHOHKS3bGiAlTddYm%2F7BbjOkyOvMg4akYP1b5gkkWTWXlvSkSsN3C1S3Nf1B0F0XnoVYEenRO8JY4XGG1dwFDaD9ZA7LquwWi5MuPhhC%2Bbya8qyYszrUDgaAIFbeEqs4uN1xwnuNTLlbkomMqMQgAeSODxXWeuC%2FRibPGB3LXkLvEVZnVn6G%2BqBILXCy7WHRkhWyKc3wGMEAeLN3%2Bs7f6WdrH%2FgBit3uxhtKd5U0ordFbQ9KmYZW4Wwubq5Eq8Dg1HPe2crT1BAiK1s034bZf7ZmpR2eLe%2F77BC9NMIitmBuAMKTE28QGOqUBRnFdbV4fXFDrjdqtaWBY9Ac6tXim9t%2FYHzxK22ZclFP1RzOY89D99WFi6h%2BkCDvZTejy3dlD2EErGojWX0A3lDlKAp0HMjTem05O4cgcEuJqtOGYhD%2Br1H5%2Ft7Lmuv9PFxQHnoXfiSRpRnWJ%2BTC4VO2qzUNh5f18g0puC7UqwQxS4XYYWMRZDL6kks2wyStQKhl3Dwz9Dm%2FZ59qUo89Oe1%2F3U7Ra&X-Amz-Signature=52ca63051edec6b314303cb9d55de70496840db41835901982caaa32b1cabcfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
