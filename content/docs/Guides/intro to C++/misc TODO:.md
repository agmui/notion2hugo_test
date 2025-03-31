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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UU2E3B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwrAJs1gvAhJwR19iabINr3Ie1nnNym5gXNa4IY3q5sAiEAwRjEvZNMAAIpS4VNm2wWl8pJFus96ons%2B%2BwTGPqyXukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM%2BGrMy4kvB44YTcCrcA99MKqXM7ai39jjkC0c3fQeSSUUAXk4FKPh14n9m%2BeesC0RVNwgtL%2BX0X5Nix61IgwD5dDdG84xjWlW9HbV1PxlstN5OKsQ0T%2F%2B4M6dvCunJwSVAI68S2g92Ng%2FTW96BFoFB9W%2FmRIOezkt%2BUWeIeOv8ERlo50vqAWOlGFFU1%2BhkmTxOQ5iE19xEYg3sCUfvvYsP3u2jX1LEtiEZB14NVWqjzcAubP2HQEyneAl%2B8GXihyA4QPxBckTyLUJ5MOhnM1W7oSXRfSyAm8hAMsuZtL7HZHjYuXVAdWhSW97IXgod3FpSUgCEs5Fx8i8qr0aqdpSWGJHv5Mda1jVVoN83Er5HNHXoG4uw%2BdVdlatThTJQ%2BbSdBlPanwiUVOynOdY2XmjSNI1djaehQsxaukPL5epaXJINKg%2FgpUKawj7rOaaXuiTDvHKjkNtqNUCNhQe4d3B8m7PdLf%2BTnJ%2BfDwBartJuInXO456%2BxX%2FjsRxEvnDZEcFmPKhKHufmz7LSag2qJuK9A%2FHpDpRDBCPh3gYCTPk3pBuK6y1b0%2B15%2FwsUiWdJrjfksBPJfk0AHzCByl7%2BdAvG3remQ%2FMOI4hdviePlt41%2F8zWzqYRbE%2FJWkdGQCNAjc5FMLkEwWsC33yvMJ3lqL8GOqUBIMSrj7T6AroHLGKWBGprPsX%2B7AUH%2FBzilMhDvbJWNbvxrIpX5AO3F6b46HRk9tnV7W3FizWf6tZ2Yt6Xmuu%2BAmJ4Ke4Y7%2BpxwTz%2BG0KSjvbbKRVE3HJYAru3eH6RakJQsR0fY4DqiccjKN9l6zbDZRMXeJl5NM%2F1exx%2BHeJD19%2FgYu17yq9PKK%2FD2Q7duKB1DIvmzdpyoEN7IafOmQ1d3bsflQx8&X-Amz-Signature=8e8986086c112fedb9810fe742d874eb4e297c2f579d969bcac06eeffe607149&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UU2E3B%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEwrAJs1gvAhJwR19iabINr3Ie1nnNym5gXNa4IY3q5sAiEAwRjEvZNMAAIpS4VNm2wWl8pJFus96ons%2B%2BwTGPqyXukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM%2BGrMy4kvB44YTcCrcA99MKqXM7ai39jjkC0c3fQeSSUUAXk4FKPh14n9m%2BeesC0RVNwgtL%2BX0X5Nix61IgwD5dDdG84xjWlW9HbV1PxlstN5OKsQ0T%2F%2B4M6dvCunJwSVAI68S2g92Ng%2FTW96BFoFB9W%2FmRIOezkt%2BUWeIeOv8ERlo50vqAWOlGFFU1%2BhkmTxOQ5iE19xEYg3sCUfvvYsP3u2jX1LEtiEZB14NVWqjzcAubP2HQEyneAl%2B8GXihyA4QPxBckTyLUJ5MOhnM1W7oSXRfSyAm8hAMsuZtL7HZHjYuXVAdWhSW97IXgod3FpSUgCEs5Fx8i8qr0aqdpSWGJHv5Mda1jVVoN83Er5HNHXoG4uw%2BdVdlatThTJQ%2BbSdBlPanwiUVOynOdY2XmjSNI1djaehQsxaukPL5epaXJINKg%2FgpUKawj7rOaaXuiTDvHKjkNtqNUCNhQe4d3B8m7PdLf%2BTnJ%2BfDwBartJuInXO456%2BxX%2FjsRxEvnDZEcFmPKhKHufmz7LSag2qJuK9A%2FHpDpRDBCPh3gYCTPk3pBuK6y1b0%2B15%2FwsUiWdJrjfksBPJfk0AHzCByl7%2BdAvG3remQ%2FMOI4hdviePlt41%2F8zWzqYRbE%2FJWkdGQCNAjc5FMLkEwWsC33yvMJ3lqL8GOqUBIMSrj7T6AroHLGKWBGprPsX%2B7AUH%2FBzilMhDvbJWNbvxrIpX5AO3F6b46HRk9tnV7W3FizWf6tZ2Yt6Xmuu%2BAmJ4Ke4Y7%2BpxwTz%2BG0KSjvbbKRVE3HJYAru3eH6RakJQsR0fY4DqiccjKN9l6zbDZRMXeJl5NM%2F1exx%2BHeJD19%2FgYu17yq9PKK%2FD2Q7duKB1DIvmzdpyoEN7IafOmQ1d3bsflQx8&X-Amz-Signature=727f2e453a01e4aa8b718d0887bb2c07d6cca7a87026f9f97bb481dd8fa73055&X-Amz-SignedHeaders=host&x-id=GetObject)

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
