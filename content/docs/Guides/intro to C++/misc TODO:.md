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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4TXIVM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0GVADwujKbLNCh0zKmX7agnnx0LwWW5kaP456e83pgIgVPVgH9HOicMLxERaQHoMpxPh3h4Ry%2F0PyBxZBSOptFMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1VeCloAc0BIZu3ircAx2mlPKrgTlIE5j4JZg2XD00n1bVE1HUNBOMnd%2FoBPUZIXz5Uh87EJa%2FFqnBcQ9nA04P%2FFEoLDH8YguWb6%2BWvxsK9mtl5T9XbfDGS3ckeiG4ztCjd90oWMwsAYjU1acrj4o2teqzpLJL54fM2V2cWjJsloj%2BwWXwXZKTXDFAeTwQgxOyf%2FLYZ7YKivDAaCshm31P54dqVZSJW0CdkN%2BBWmbv5bhBDZAuI37Mt%2FRyOWJN39MXnTBdZLfhnVni9QAUhe3vzaDa1FJoUH7lDWmBTR8813KP7uoUFV8M%2BeX3CnPry%2FXnsmqB9rDLSUML0%2BMJw7wgzWPfDV%2FQhIpBSV%2BYIbAq9ZZD2rVeOalNCoSPCw40ZvxnbIzPE8Qd%2Bmi%2Fv1PpknlmZ1GmV%2Bhh0SICLTIBoJSC8bTbtXFi3GkVK1b2Jrh8V7pGPRKExH82o%2B%2FU6sdTYbzS2vMkooiAF%2BJh0FPajvtPZDqfZ7QaJRZ72wYEmXX7aUYLskdGsFXHdQTKvC6E5QZjAUk5MiVpT%2BYNmdYzj53prUfMdssk%2FAbySjFPw0J8xvx%2BoSNenuXK0T9nYC3kCyugdKzCVHlrtxLMe4yMfZwhzGohDOIRIu6CRoJK4ZW1A6Cv9wT6PE6O635%2FMJLH5b0GOqUBIN4kmP%2B8Wvn1SFY1MKaZ6SLqXHPawmquDTt2NQCW7qVc6o1LKUdn5Vlb4JVguVSYyeQ8B12HV6%2Bae%2FFcFOCEAoP2ZcBxJv%2FGOzIOciMsMrjhzxP4zIKJsPC9tWJqFQbj6Zl3eclEtUGVTe2Efp8wRhO%2FjcNHRs8xbxQZVEaDAuQG%2BwKCa4PGzKeA3l%2B7HAFDEbufXPI3Icv47n%2F7CBGibzxbLL%2Bj&X-Amz-Signature=a161ed5a17801c1dcc1e6e5812a32a82f02af6f49dd9466e6f773b6771c377e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4TXIVM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0GVADwujKbLNCh0zKmX7agnnx0LwWW5kaP456e83pgIgVPVgH9HOicMLxERaQHoMpxPh3h4Ry%2F0PyBxZBSOptFMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1VeCloAc0BIZu3ircAx2mlPKrgTlIE5j4JZg2XD00n1bVE1HUNBOMnd%2FoBPUZIXz5Uh87EJa%2FFqnBcQ9nA04P%2FFEoLDH8YguWb6%2BWvxsK9mtl5T9XbfDGS3ckeiG4ztCjd90oWMwsAYjU1acrj4o2teqzpLJL54fM2V2cWjJsloj%2BwWXwXZKTXDFAeTwQgxOyf%2FLYZ7YKivDAaCshm31P54dqVZSJW0CdkN%2BBWmbv5bhBDZAuI37Mt%2FRyOWJN39MXnTBdZLfhnVni9QAUhe3vzaDa1FJoUH7lDWmBTR8813KP7uoUFV8M%2BeX3CnPry%2FXnsmqB9rDLSUML0%2BMJw7wgzWPfDV%2FQhIpBSV%2BYIbAq9ZZD2rVeOalNCoSPCw40ZvxnbIzPE8Qd%2Bmi%2Fv1PpknlmZ1GmV%2Bhh0SICLTIBoJSC8bTbtXFi3GkVK1b2Jrh8V7pGPRKExH82o%2B%2FU6sdTYbzS2vMkooiAF%2BJh0FPajvtPZDqfZ7QaJRZ72wYEmXX7aUYLskdGsFXHdQTKvC6E5QZjAUk5MiVpT%2BYNmdYzj53prUfMdssk%2FAbySjFPw0J8xvx%2BoSNenuXK0T9nYC3kCyugdKzCVHlrtxLMe4yMfZwhzGohDOIRIu6CRoJK4ZW1A6Cv9wT6PE6O635%2FMJLH5b0GOqUBIN4kmP%2B8Wvn1SFY1MKaZ6SLqXHPawmquDTt2NQCW7qVc6o1LKUdn5Vlb4JVguVSYyeQ8B12HV6%2Bae%2FFcFOCEAoP2ZcBxJv%2FGOzIOciMsMrjhzxP4zIKJsPC9tWJqFQbj6Zl3eclEtUGVTe2Efp8wRhO%2FjcNHRs8xbxQZVEaDAuQG%2BwKCa4PGzKeA3l%2B7HAFDEbufXPI3Icv47n%2F7CBGibzxbLL%2Bj&X-Amz-Signature=35fa77044c8721d7762ee6524b9d4acc291e93d941131d99bd72e845d8dc8bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
