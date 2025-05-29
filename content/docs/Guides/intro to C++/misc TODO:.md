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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDNPM4F%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmY5N9yJ3S3YIbAVce2jyojmJRbie3Pzh8Y6mQqEJF0AiEAv7K0T%2FgLaalP8Jp5Vn6cKuFaN6h1vHNjupvgLv%2BNne8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5nE7A5DfKX2pYsRSrcAw15KswsqacnfHLICpsGwS45hYOsYeqk2T6kK28VHaJVbjjiNIdAcufvCym0ocRI4Q5PL7U7LkG16VkJUoHMDR0kEZhVq7O08ex4RJHCPQzsnJobh%2FqVEjZKvrdkrhL7LEGtA5s34J5dvIWjvSrOeZTRRIK8cASJjCW2%2Bj%2F7%2FQ5rhZX7JvJrzujJ0uAgwOVNUKszRqJhLXg5sPIRfv7RQQdSGBYpPzVln5HPrs0Z1QQDHUawTYBLD2504YShsAsQv%2FGZ%2BNrRCSVtoPEQCv%2FWCdy489wz0GP0bBU6QBPFyzKp2HXle77ax8Hp%2FYGalj30qSkKWZ76gWM%2Bi0LoPTTLtS%2FgJmBQ18%2FCC2AiCjuznKxcyR6ATID2pbxF0XFItiSjn9dAayITcgKyhN6ByGGhbpkEU53nz%2BqgRRMUnNsC6uVy7mJS1T8BW6UNTNM7hBFLXfrysiBOg5hDu2NAk9WOPOJrnsoaY3Eh6rFzdKSIQ9IBcrefreQTld0j0PnJwUAQSaar31j%2BuTuio9%2B%2BiJ1OT2%2BotYyrKZ6qT9c%2B7ZD0QDmVx5aW0fOmDo8kXJyLw2MGuQN4RwsGHB33IIHFjD3VcWHN3yqQXek9QhXjfDaub48uGCjtx0K4Jjab4IiUMMay4cEGOqUBethyGB8fHezHo79aNg4vm35Yo2%2FZVT%2F2aaJcxW%2FK%2Bhg0GJSmGlAlf0wU1e7HjPY3VdtkZzeKSTMWF6sT%2FCC8UzFQG4HbLHxamtxwe6Cs56m3SetCRSFbIg8loNcjI1MQ0%2FJtHnI61UQh2tqXYhlQVpgyqWOhAYbS%2BcjcMT5dC%2BdluTtFwgaXLpUQBmiYsJGJ4ipcJVVpAYEkPZ%2BUB38Cnm0VvEdW&X-Amz-Signature=840f422bdd46b9a32135ad84673030460b976b3d113281580c18e35ba510d234&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDNPM4F%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmY5N9yJ3S3YIbAVce2jyojmJRbie3Pzh8Y6mQqEJF0AiEAv7K0T%2FgLaalP8Jp5Vn6cKuFaN6h1vHNjupvgLv%2BNne8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5nE7A5DfKX2pYsRSrcAw15KswsqacnfHLICpsGwS45hYOsYeqk2T6kK28VHaJVbjjiNIdAcufvCym0ocRI4Q5PL7U7LkG16VkJUoHMDR0kEZhVq7O08ex4RJHCPQzsnJobh%2FqVEjZKvrdkrhL7LEGtA5s34J5dvIWjvSrOeZTRRIK8cASJjCW2%2Bj%2F7%2FQ5rhZX7JvJrzujJ0uAgwOVNUKszRqJhLXg5sPIRfv7RQQdSGBYpPzVln5HPrs0Z1QQDHUawTYBLD2504YShsAsQv%2FGZ%2BNrRCSVtoPEQCv%2FWCdy489wz0GP0bBU6QBPFyzKp2HXle77ax8Hp%2FYGalj30qSkKWZ76gWM%2Bi0LoPTTLtS%2FgJmBQ18%2FCC2AiCjuznKxcyR6ATID2pbxF0XFItiSjn9dAayITcgKyhN6ByGGhbpkEU53nz%2BqgRRMUnNsC6uVy7mJS1T8BW6UNTNM7hBFLXfrysiBOg5hDu2NAk9WOPOJrnsoaY3Eh6rFzdKSIQ9IBcrefreQTld0j0PnJwUAQSaar31j%2BuTuio9%2B%2BiJ1OT2%2BotYyrKZ6qT9c%2B7ZD0QDmVx5aW0fOmDo8kXJyLw2MGuQN4RwsGHB33IIHFjD3VcWHN3yqQXek9QhXjfDaub48uGCjtx0K4Jjab4IiUMMay4cEGOqUBethyGB8fHezHo79aNg4vm35Yo2%2FZVT%2F2aaJcxW%2FK%2Bhg0GJSmGlAlf0wU1e7HjPY3VdtkZzeKSTMWF6sT%2FCC8UzFQG4HbLHxamtxwe6Cs56m3SetCRSFbIg8loNcjI1MQ0%2FJtHnI61UQh2tqXYhlQVpgyqWOhAYbS%2BcjcMT5dC%2BdluTtFwgaXLpUQBmiYsJGJ4ipcJVVpAYEkPZ%2BUB38Cnm0VvEdW&X-Amz-Signature=edfdc18d3b3bfe1bf1cafa0c86e077ebcf86c580a8383adee06b3e0b5e479c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
