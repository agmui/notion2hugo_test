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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPJT6TI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGWMkWbngszpUK%2Bp0bON69DFwWyW6sB%2BD%2F8K5CPXhd9AiEA73h68s1SvH%2FMlffXIl0bJ2dDcYsT2IamDr44RWEc7jsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFtNq%2F4aM5xiNqvXCrcA3kshmKZY4kXzjTtyb8tZuED5r%2FXykWe3WAtz%2FKBMiAGzGxthOkFel%2FqvYoEQRnYIF5fdEPbBbp6Q8JHjR3gvK4XdRvanJ4Z7gT5%2F2uda1YwhT2fRfuVhr1pxff%2B0hRkSC18JcjmryBCZoDNyPaNLySvtFpBps%2Bi3mg4ci9JPILO%2FzM2ibpEVlJBCH9vb6vMSdvhD2hUqVJaJftfN5r3Zy45VDWt7SiZSOYtW8pcw4C4zerGxFStJ%2FV9UW%2F8i39S2G2OYtP7H5ScxZn9Rm5VpUZoazFTVRrZ9G6kFAgLVOHcrTEu4DbJ0NtLi7ATE4dooKOn%2B7BJMLiP%2BBgUES%2BdhmxNPdf1E8Fom8rT70sQwUkK8Ud1ypoemG4ImY%2BHItCXawfnDcyO4jj2p3oqBUlSXQeVPYdGJqjD6XmW7uU4AL69O3%2F1FcmANYheji7PTrpmpcYeUKFXkRw%2B5ug57uTOPZ3c%2F5Mg%2F3pfbjOiRChgzg49BtEQdWxtsZJumGxVkJssWP9ScazIlNjrXz4tBHJs2rjbW0jTvorteJtyGSlosGFlG6A4vTesAY%2FSDmZJSzvn5dkDUs4eznfieQCnvwxSuSTyedNkDXCK%2BhwOMN6KOME0ZvUhmgTKj%2BHO3PCWMOj9vsMGOqUBEtotTppfjda0IK2EDQ%2Bg7pUgkdlznFXBt4GClkkOWcz6T7vprUWgZVBsZGuH%2Fc0kgJpfC3yfq3Han%2FhI1Ns7FpZoPI8jaOPkVpBDgpt%2BehmrD0YcnlitZ1UytL2acr%2B%2BPBGlrPPOMp5QoS7uw9AWPNkYqPDFl0NGmLo8eY0B2o04TNsWGb98r2WjhSZ8tbyvB3IdbKZKWIN4QT%2BnXh78kW%2FmMm6P&X-Amz-Signature=dea92929c237333b64a2a1bd604f910e4ad846e6db8d9c2726520e0d20f406fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPJT6TI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGWMkWbngszpUK%2Bp0bON69DFwWyW6sB%2BD%2F8K5CPXhd9AiEA73h68s1SvH%2FMlffXIl0bJ2dDcYsT2IamDr44RWEc7jsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFtNq%2F4aM5xiNqvXCrcA3kshmKZY4kXzjTtyb8tZuED5r%2FXykWe3WAtz%2FKBMiAGzGxthOkFel%2FqvYoEQRnYIF5fdEPbBbp6Q8JHjR3gvK4XdRvanJ4Z7gT5%2F2uda1YwhT2fRfuVhr1pxff%2B0hRkSC18JcjmryBCZoDNyPaNLySvtFpBps%2Bi3mg4ci9JPILO%2FzM2ibpEVlJBCH9vb6vMSdvhD2hUqVJaJftfN5r3Zy45VDWt7SiZSOYtW8pcw4C4zerGxFStJ%2FV9UW%2F8i39S2G2OYtP7H5ScxZn9Rm5VpUZoazFTVRrZ9G6kFAgLVOHcrTEu4DbJ0NtLi7ATE4dooKOn%2B7BJMLiP%2BBgUES%2BdhmxNPdf1E8Fom8rT70sQwUkK8Ud1ypoemG4ImY%2BHItCXawfnDcyO4jj2p3oqBUlSXQeVPYdGJqjD6XmW7uU4AL69O3%2F1FcmANYheji7PTrpmpcYeUKFXkRw%2B5ug57uTOPZ3c%2F5Mg%2F3pfbjOiRChgzg49BtEQdWxtsZJumGxVkJssWP9ScazIlNjrXz4tBHJs2rjbW0jTvorteJtyGSlosGFlG6A4vTesAY%2FSDmZJSzvn5dkDUs4eznfieQCnvwxSuSTyedNkDXCK%2BhwOMN6KOME0ZvUhmgTKj%2BHO3PCWMOj9vsMGOqUBEtotTppfjda0IK2EDQ%2Bg7pUgkdlznFXBt4GClkkOWcz6T7vprUWgZVBsZGuH%2Fc0kgJpfC3yfq3Han%2FhI1Ns7FpZoPI8jaOPkVpBDgpt%2BehmrD0YcnlitZ1UytL2acr%2B%2BPBGlrPPOMp5QoS7uw9AWPNkYqPDFl0NGmLo8eY0B2o04TNsWGb98r2WjhSZ8tbyvB3IdbKZKWIN4QT%2BnXh78kW%2FmMm6P&X-Amz-Signature=d42b4663504d00931ba5eb1521df436c84e660325404f1209b4453317ff21802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
