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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQPXU6Q%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFGxNWU0RPDmuoOlYuOHqauoKthFUTNU3jvDEW2qTT15AiAMZc%2BwMM%2B%2F0M%2FwdXD6cCPbt%2FEX8MqKSzet%2BKFxG5bDeyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLGv%2B%2FNFj0SXeXwpKtwDxqk925Qho%2FOXToisZ%2FhSd7kqFk%2BBoVy1a0pa%2Fx4zLyVXFf8UW9k%2FDxJCeWXnB8whfNcw0RpcBc7V4mpngNSAw2ZV7JG5NiWkd0u0HsggiNzEFzssKq0zdWeXdtIVzgstaBJnjarGhfhVJcoLfVFUchccjFHpiKBn5mzusgya7DPiA09iqe6WzqDB9PdE5hoQNVbD%2Ffmtr8PHucw%2F0hKiJdMz5SH%2Fy2YH8ED%2FYmzmiQTFGAQ8kAi%2FAHfx8i%2Ba5jVSWqj0B2mh1dppNp%2BxiyyZgaHH3kDd0MJrR6SdJRhcWD9Dn45LO03mkoKh8Gh19ZBDCcknLXKjaXMIL7pPVPqPucCfyil72sLFQUniwyfTAG1Bh7odfUeC8sJCvRXRZjlEQ70ryfo50i3IAljb4E8ByfsAPVZrq91jotiCPvISUDkk55btTbUTdnmeXMODWES5ASgtKP3CnkKuZ8xfW5kW2vWkllzBRG4PjpeUD7A5cFxjjkgWnB05CYk9fCC5yWQZ8%2F%2FMPWLr6KCbyDF%2FPn03AiiReoFHp6wmoRrkzpj%2F%2FhTP227IlO596vf6s%2FwVyL9%2Fh5C0IWd2pWdQq7%2Bs2Tm6oXUrup0e0s3SmvjU4Bdu8MbD0Qb1qdpj4w5rBvUwhOnuvgY6pgFldQSIdVQ0iGjr%2Fe2%2BwkQjwSBFCF06R2JJQzL798kwtycsfJpSnTBHKgQzoENNI%2FMFO%2Fxv5J2OLr2GgeaPp5zgwnHoiaY400pwT2jbRN1coppmaTLuP5K0gXYPmJEqf58pPDic%2BDIq7wtCjLS0GcvtyChi09h0y2ifclPs9Fx2oHVDbZ0Fw36cM2tzz8l6vHlZwrpHkWIKGHmkyavqs1KO6FnGtsmB&X-Amz-Signature=0b5d02b17f2a05cba28a114ff6845f1fe4e61194cfadd36aa6f12eb265d993d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQPXU6Q%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFGxNWU0RPDmuoOlYuOHqauoKthFUTNU3jvDEW2qTT15AiAMZc%2BwMM%2B%2F0M%2FwdXD6cCPbt%2FEX8MqKSzet%2BKFxG5bDeyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLGv%2B%2FNFj0SXeXwpKtwDxqk925Qho%2FOXToisZ%2FhSd7kqFk%2BBoVy1a0pa%2Fx4zLyVXFf8UW9k%2FDxJCeWXnB8whfNcw0RpcBc7V4mpngNSAw2ZV7JG5NiWkd0u0HsggiNzEFzssKq0zdWeXdtIVzgstaBJnjarGhfhVJcoLfVFUchccjFHpiKBn5mzusgya7DPiA09iqe6WzqDB9PdE5hoQNVbD%2Ffmtr8PHucw%2F0hKiJdMz5SH%2Fy2YH8ED%2FYmzmiQTFGAQ8kAi%2FAHfx8i%2Ba5jVSWqj0B2mh1dppNp%2BxiyyZgaHH3kDd0MJrR6SdJRhcWD9Dn45LO03mkoKh8Gh19ZBDCcknLXKjaXMIL7pPVPqPucCfyil72sLFQUniwyfTAG1Bh7odfUeC8sJCvRXRZjlEQ70ryfo50i3IAljb4E8ByfsAPVZrq91jotiCPvISUDkk55btTbUTdnmeXMODWES5ASgtKP3CnkKuZ8xfW5kW2vWkllzBRG4PjpeUD7A5cFxjjkgWnB05CYk9fCC5yWQZ8%2F%2FMPWLr6KCbyDF%2FPn03AiiReoFHp6wmoRrkzpj%2F%2FhTP227IlO596vf6s%2FwVyL9%2Fh5C0IWd2pWdQq7%2Bs2Tm6oXUrup0e0s3SmvjU4Bdu8MbD0Qb1qdpj4w5rBvUwhOnuvgY6pgFldQSIdVQ0iGjr%2Fe2%2BwkQjwSBFCF06R2JJQzL798kwtycsfJpSnTBHKgQzoENNI%2FMFO%2Fxv5J2OLr2GgeaPp5zgwnHoiaY400pwT2jbRN1coppmaTLuP5K0gXYPmJEqf58pPDic%2BDIq7wtCjLS0GcvtyChi09h0y2ifclPs9Fx2oHVDbZ0Fw36cM2tzz8l6vHlZwrpHkWIKGHmkyavqs1KO6FnGtsmB&X-Amz-Signature=8649f9b58214c430614e8fee1a790feb89d8757bc2e837524313b400712e50d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
