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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5Z6Y4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIH3TK8v8VNI%2FDglDDs3Zh8Rz4TwMQICbrAPjO7lr4jv9AiAE8rfgPLXCLqF%2FliEj30myxQ0OfwECRZXCRr4N1WMCtCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq7hAy%2BRBkE%2FgpnGrKtwDQgElsS69ubkb%2BfytvTPS%2Bc1c7MnQhf0YM0%2BHSnM%2Bv%2BUEpOwAsvToDgzAMezbb6edCFPG%2FdyXmBEyfmdFUPEIyvy2ng49Vu50uHvLd0l914FX%2F7r%2BlDysKBfLtDLaelEKleASdiCWvLGy2vaC3CVenWegx80MtV1zBEAZx2Raf2MO1CuEDtlziqj3nJ8WMP3CdyK3TdsFo5nTstZZ2lSKWX0YmOzvxum9PCF5AeeJYlkGSTqlAv%2FXfLUY3NKM6%2FzI4omNH01feDUvw7Gnh3SgHf97k3rkPlZ9dBq4bgSnZ0%2FGNl5qx7bpxxSvg0U8OFfKQHFsElTlEnXYFHPWkmMmxzBFm5mYrmar0VBTLO0AKnXXrp6%2B4lTofOI9wtEueZ8FWb88RmplsLFtlrc1HcxFt7pXxWQ6CakEX4480yH2TNIiiFG2ul8HkS2PQOLclHUO1l94YvEjfBAWg3eFDG6wNfXohAmrhHGY2%2FS2kUI%2FNk6ndO7bNv9o71GMNoKHOKF29lyVmQ7wwHXNWuZf5yyo%2FztGlkwlNyUR%2FQXhAITkj5t3z%2BQfb399wa%2BnasIkC1EwRc46bhKHtiTAW0Jt0a62tV58F5zvDuYEzSiZrTE4OZU%2FiXqfBqeF6ksEdtEw0Y3tvwY6pgFTHrr4ZUgykdeD%2BfB6q9YP5TgALGmeZ2FHA2k2gJsNyvA9JrUzSPuJh3Pmn3y%2BsLV%2BXRW2SBbBT%2Bx00cw84qWiRt5hl26lOe3XsmhsDCuY2TsX%2F9p3EaCSIIcEec731omKb8Kgtvbn638rvUaz6Muv2f5XVfgQBOfKcBXw5Xo%2F7ne1vdDdqAgVt3F3rExfiU7AwmOn20J0AYyGjNA5RU6D%2FAR7jnBY&X-Amz-Signature=05f600f28fd70899951c20f29cd81a7b7a0e337c7675534a9fd7ffa4fc2d6146&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5Z6Y4Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIH3TK8v8VNI%2FDglDDs3Zh8Rz4TwMQICbrAPjO7lr4jv9AiAE8rfgPLXCLqF%2FliEj30myxQ0OfwECRZXCRr4N1WMCtCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq7hAy%2BRBkE%2FgpnGrKtwDQgElsS69ubkb%2BfytvTPS%2Bc1c7MnQhf0YM0%2BHSnM%2Bv%2BUEpOwAsvToDgzAMezbb6edCFPG%2FdyXmBEyfmdFUPEIyvy2ng49Vu50uHvLd0l914FX%2F7r%2BlDysKBfLtDLaelEKleASdiCWvLGy2vaC3CVenWegx80MtV1zBEAZx2Raf2MO1CuEDtlziqj3nJ8WMP3CdyK3TdsFo5nTstZZ2lSKWX0YmOzvxum9PCF5AeeJYlkGSTqlAv%2FXfLUY3NKM6%2FzI4omNH01feDUvw7Gnh3SgHf97k3rkPlZ9dBq4bgSnZ0%2FGNl5qx7bpxxSvg0U8OFfKQHFsElTlEnXYFHPWkmMmxzBFm5mYrmar0VBTLO0AKnXXrp6%2B4lTofOI9wtEueZ8FWb88RmplsLFtlrc1HcxFt7pXxWQ6CakEX4480yH2TNIiiFG2ul8HkS2PQOLclHUO1l94YvEjfBAWg3eFDG6wNfXohAmrhHGY2%2FS2kUI%2FNk6ndO7bNv9o71GMNoKHOKF29lyVmQ7wwHXNWuZf5yyo%2FztGlkwlNyUR%2FQXhAITkj5t3z%2BQfb399wa%2BnasIkC1EwRc46bhKHtiTAW0Jt0a62tV58F5zvDuYEzSiZrTE4OZU%2FiXqfBqeF6ksEdtEw0Y3tvwY6pgFTHrr4ZUgykdeD%2BfB6q9YP5TgALGmeZ2FHA2k2gJsNyvA9JrUzSPuJh3Pmn3y%2BsLV%2BXRW2SBbBT%2Bx00cw84qWiRt5hl26lOe3XsmhsDCuY2TsX%2F9p3EaCSIIcEec731omKb8Kgtvbn638rvUaz6Muv2f5XVfgQBOfKcBXw5Xo%2F7ne1vdDdqAgVt3F3rExfiU7AwmOn20J0AYyGjNA5RU6D%2FAR7jnBY&X-Amz-Signature=eab014557bb59ec6698e266b1a650fccabb5b308257e77c4874ff4474718f706&X-Amz-SignedHeaders=host&x-id=GetObject)

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
