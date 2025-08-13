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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXLIKFX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnbpWvYUWZXHV8lhmMrTb98AnFcl9jrthhVevFAVXoOQIhAI75nmPh6rORRCaoEu38gnfuf%2BMkXq6RFeNWhLk4uQPDKv8DCCwQABoMNjM3NDIzMTgzODA1Igx1uLavaF6AWY%2FysjQq3AM2pL3f3Dcagt1uspEF9ftDsqLwnyH0MqyotoK6mgDso4Vx9Aosnd7U9ZcUuikwReCh0sTKr0C2wby0O0%2F2i9XAujszZOgT%2FZAsk%2FslAskbOPvc0rUYiDEIIt7BNCBvTWmi6CdtmQPri2DH72yeP5sfgxkag4hU5Oip6VsvgUmiuoJu0ZK70kzLVGU%2FQAMBZhx%2ByB%2B2g3DHU7CYoyLk%2BdcZZ4YPjZf3DJahCZZIg8KDXIRu8nxGNmtnBrYHWaPFfL7UcN9PiqWMHT0P4hKdcvMxfqazzTPTWoUqLcOFpgJFL1lTy0gTGO3EqAY9Hc2xMH%2BCcPUPsmKoJcECwQL52c3akbKJhpbmKs%2FUdlRciSuKH99vQoUFSdOyeUEimcJx8h%2BSCIXhsnUH6dZ6vgyVONYQmuujK5xtHemo6nTc8DYqtkl%2Fn1WV%2FLGExu%2FH1%2Bf6eeiNmr%2BEb14rPVbAYIoTcOt0Pv%2Frplw5f7CywJqg5BomKMewrKl5lrJJ6L5S5d8rlQfmG5yDolpEkDt1urLuMA5s98ZbrJAjQjats1nt7r%2FDLpI55neSZirgYX9WgzHw6xPxSOe70olj8P%2BFIoFwmKUgFu4wvK4X%2F%2Bbb4yir%2BqUScE5RgnJ8MKkjvqUJtTCf6fHEBjqkAaxDjZWqMP7TTwVzEiHx3lMYP8c3wKBNtrkCp3uIPzEPJSeoa8anYFc8eloMvP66pJv%2B%2BtPF%2BqizIBys8LlWDctUj63Tfc00pJX52EfgqARdFULUYpnqtmNsQuhYgNA5UBhwJhQjCpg5lkJTyM%2FPle9mtPBY1WD%2BjOzMDkOAIsEcXNdt12vnOEgVsnfNFyTdEKCJltf1Ee5VQjEMjZyl%2F0EKx4Yo&X-Amz-Signature=d321a369aaec37efe2315f91bd1d235e4706ec7dcb6e959c84d3bebbd35664ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXLIKFX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnbpWvYUWZXHV8lhmMrTb98AnFcl9jrthhVevFAVXoOQIhAI75nmPh6rORRCaoEu38gnfuf%2BMkXq6RFeNWhLk4uQPDKv8DCCwQABoMNjM3NDIzMTgzODA1Igx1uLavaF6AWY%2FysjQq3AM2pL3f3Dcagt1uspEF9ftDsqLwnyH0MqyotoK6mgDso4Vx9Aosnd7U9ZcUuikwReCh0sTKr0C2wby0O0%2F2i9XAujszZOgT%2FZAsk%2FslAskbOPvc0rUYiDEIIt7BNCBvTWmi6CdtmQPri2DH72yeP5sfgxkag4hU5Oip6VsvgUmiuoJu0ZK70kzLVGU%2FQAMBZhx%2ByB%2B2g3DHU7CYoyLk%2BdcZZ4YPjZf3DJahCZZIg8KDXIRu8nxGNmtnBrYHWaPFfL7UcN9PiqWMHT0P4hKdcvMxfqazzTPTWoUqLcOFpgJFL1lTy0gTGO3EqAY9Hc2xMH%2BCcPUPsmKoJcECwQL52c3akbKJhpbmKs%2FUdlRciSuKH99vQoUFSdOyeUEimcJx8h%2BSCIXhsnUH6dZ6vgyVONYQmuujK5xtHemo6nTc8DYqtkl%2Fn1WV%2FLGExu%2FH1%2Bf6eeiNmr%2BEb14rPVbAYIoTcOt0Pv%2Frplw5f7CywJqg5BomKMewrKl5lrJJ6L5S5d8rlQfmG5yDolpEkDt1urLuMA5s98ZbrJAjQjats1nt7r%2FDLpI55neSZirgYX9WgzHw6xPxSOe70olj8P%2BFIoFwmKUgFu4wvK4X%2F%2Bbb4yir%2BqUScE5RgnJ8MKkjvqUJtTCf6fHEBjqkAaxDjZWqMP7TTwVzEiHx3lMYP8c3wKBNtrkCp3uIPzEPJSeoa8anYFc8eloMvP66pJv%2B%2BtPF%2BqizIBys8LlWDctUj63Tfc00pJX52EfgqARdFULUYpnqtmNsQuhYgNA5UBhwJhQjCpg5lkJTyM%2FPle9mtPBY1WD%2BjOzMDkOAIsEcXNdt12vnOEgVsnfNFyTdEKCJltf1Ee5VQjEMjZyl%2F0EKx4Yo&X-Amz-Signature=91fc2342e83e9228b950a17fafa0242e7a5b303c1a23c768d9d171e034bd8d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
