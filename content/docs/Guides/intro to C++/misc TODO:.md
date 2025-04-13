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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3WDGHA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYQXDl0jUGUJo1hUL2ZztaUoXhNi90kOggmyuW3L0MsgIhAOJAAeBYXeDDQDO3rQtTP6mfxPYNO4q%2B0dgKZClU%2FFIHKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr15buNZTX1DHyzHMq3ANbmV2SrRxnfp%2BlVCGBiBRh608BZp9I3fWkae8efCjM3vVM1J1hKMNsqxwjADFkdS9xfP37Q2h3pmZHf223ccw0%2FY9FWF52lWfQEMUuk9JUqrkDxMvpgUOEI%2BkeH9l9HMod5pO7pqdr%2FoeZDzGUf3AbYgrfP1IC3rc89PnTJMfF%2Bn92y6Z6RrXE3t12cWd9iYeJ73HQaTghR9ZaMHZz%2FUyfih5%2BV5qiBeRDhjB04p2cSEBbQ8bJmLfT58IaISG4%2B3EEatnexmDpbqtyf05fkbwVHdlGvtyJJDeC8Nr7dtqhhFwnvf6C84KKXvCKAuci%2BeWe8yd%2BPPHTmQU%2B13lGQBDo%2BfJDesdAOjPsMQ5WjMwpzCpXzfzOe%2FWMCe2tsTU3wAp8dP8SNwX54X7exlgHj8FQ0ESsSh%2BZB8l2ogFwwL%2FPeT6iZPZKxYumRiiqkwAklVrNCIzxQ6uGmYoMiwT%2Bm%2BMlCwN5kHQXjCNutn6BpHgJcCLdLxlK%2BYaL21%2FLHsVFKzVbc5K3KI0vN66eDGItYeznlKBUQhZjgyoX%2B%2FzV2l7ZdfAySfsT6Z3p%2FwQMFavznzImIa9IsfimmwW0UdY9Ph6ux4hO3jCjyrdfhJlAYpeCJqKnJcH2gwO56nJuGjCYve6%2FBjqkAUk2MEiADmgZoX%2FBp7VfqJUu%2F%2FrLTu1PLyhO41d8epGaNApT4lsmifKCb9vIP4%2FYxcTlzm0zFf5S0fn8cNHEUMRx8i2VfQBZ3I6X9tEYsiN871Rq8Pa54s47eng7nZJJo%2BhLZra21gQ%2FEziIRlh3%2B%2F7o0EKOO9zFeZ1smdeTxSvc%2FTX14DJtPRC4qfHn8oEXXoCiVui9bJk0XYVPnQP%2FQO9WGHdq&X-Amz-Signature=37342430c4652931cb02f598aa473b5eb6f550ab81921bad0194b76603e6704c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3WDGHA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYQXDl0jUGUJo1hUL2ZztaUoXhNi90kOggmyuW3L0MsgIhAOJAAeBYXeDDQDO3rQtTP6mfxPYNO4q%2B0dgKZClU%2FFIHKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr15buNZTX1DHyzHMq3ANbmV2SrRxnfp%2BlVCGBiBRh608BZp9I3fWkae8efCjM3vVM1J1hKMNsqxwjADFkdS9xfP37Q2h3pmZHf223ccw0%2FY9FWF52lWfQEMUuk9JUqrkDxMvpgUOEI%2BkeH9l9HMod5pO7pqdr%2FoeZDzGUf3AbYgrfP1IC3rc89PnTJMfF%2Bn92y6Z6RrXE3t12cWd9iYeJ73HQaTghR9ZaMHZz%2FUyfih5%2BV5qiBeRDhjB04p2cSEBbQ8bJmLfT58IaISG4%2B3EEatnexmDpbqtyf05fkbwVHdlGvtyJJDeC8Nr7dtqhhFwnvf6C84KKXvCKAuci%2BeWe8yd%2BPPHTmQU%2B13lGQBDo%2BfJDesdAOjPsMQ5WjMwpzCpXzfzOe%2FWMCe2tsTU3wAp8dP8SNwX54X7exlgHj8FQ0ESsSh%2BZB8l2ogFwwL%2FPeT6iZPZKxYumRiiqkwAklVrNCIzxQ6uGmYoMiwT%2Bm%2BMlCwN5kHQXjCNutn6BpHgJcCLdLxlK%2BYaL21%2FLHsVFKzVbc5K3KI0vN66eDGItYeznlKBUQhZjgyoX%2B%2FzV2l7ZdfAySfsT6Z3p%2FwQMFavznzImIa9IsfimmwW0UdY9Ph6ux4hO3jCjyrdfhJlAYpeCJqKnJcH2gwO56nJuGjCYve6%2FBjqkAUk2MEiADmgZoX%2FBp7VfqJUu%2F%2FrLTu1PLyhO41d8epGaNApT4lsmifKCb9vIP4%2FYxcTlzm0zFf5S0fn8cNHEUMRx8i2VfQBZ3I6X9tEYsiN871Rq8Pa54s47eng7nZJJo%2BhLZra21gQ%2FEziIRlh3%2B%2F7o0EKOO9zFeZ1smdeTxSvc%2FTX14DJtPRC4qfHn8oEXXoCiVui9bJk0XYVPnQP%2FQO9WGHdq&X-Amz-Signature=b9bdd20bc838cde4bc62b2b674f55914bbdf986c79e93ff7a9427a1dad030423&X-Amz-SignedHeaders=host&x-id=GetObject)

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
