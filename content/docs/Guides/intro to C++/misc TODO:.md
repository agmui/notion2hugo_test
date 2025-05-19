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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RIOHI3V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK6xsBOkAeaZTSAu25xGczVV78aqAxV1KAhMTT6V1niQIhAJezIxbxT8WITTOMu9FkMNRpVOAdZv1dvEv5Xv4VJDR%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysnJ3XBo%2F3P1DMumkq3AM%2Fn0ePi7OjJGXqHFohnb3L0P6pjt7SgFOAJS%2BpMsFJ5mFH6Y9xjCG39meavgqt%2B%2FS%2FSzoruzoJDVuFnhMrhEML4zeHWKam4iJ1Qz%2FWlmIC2lOj5iAZliQKSYL1V3XaxpmV4o2NVSo5cGQgMiMJMI8lRaBIUB3zlKEq%2BzpQXYjk5zXK9EltqbfqR%2B67hSuQ237AcWjc%2BAPleq9uuDPzXnxduq%2FCl9fk4pLHNkNtZxWlUPTWFSTYySmRn9RBTvMIQt5JT9QQYsADjPKLr2lFFlrB2gCTVTRR19BFSO1cfANsFJ8HdvAG4oUB9I2M%2B0P0xVlAHPIv3IrJ3wdhYfejvmPmO%2FiAK8WproWS07ZDYVJGRxQ%2B3tvdzoiIuCNXyEaAY85u1mwtpgo%2F0n58AngohYq%2Bfg6kYUnKhhjEAXLvNoNQui%2FUHdiJHEoM30KmLOMZnwPmc%2FFoBldqxwmilfmsYkl%2B3f2HIO%2F55y%2BdSyvNqnoZoX63cJVxqoKSq%2BJsFgLWJXmqEZWceQWESep3WIdG6keQe5tE42Qbbm8enNzfKAOr9np%2F0DUy%2BTb8Un0IGA7V1V4U%2BtlTNu6V%2F6%2Bg04iggfEID2OOeWzQymzYtWBuQUJ%2Bi4o6%2BhwDYfYWk8wDcjC75KzBBjqkASrflw8MN3ATk5I5fuzmg34xenWYweK5OQDbcuHSR%2FwxKe7p0WwVfKsh9C1g1bPw0N%2F%2F6Hg7toVqT1dJfTcV4AWnm3skJAnRv5Bk1jpvtsJnsbCUf6zE5O%2Bz%2BiZRGJBNdzv%2B%2FH4OgQlReUIMDfvHNAdmgeTi4E8Qzoo7ZjmK4qizpJi7w2NikjRuDqEbuhXKBJXzOsVrw2qu2r67uCzbvr1SFFxN&X-Amz-Signature=9f496efc2cf7ececab1dcc940acbe036ce71fde6af47e462a0b2fa78a4928ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RIOHI3V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK6xsBOkAeaZTSAu25xGczVV78aqAxV1KAhMTT6V1niQIhAJezIxbxT8WITTOMu9FkMNRpVOAdZv1dvEv5Xv4VJDR%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysnJ3XBo%2F3P1DMumkq3AM%2Fn0ePi7OjJGXqHFohnb3L0P6pjt7SgFOAJS%2BpMsFJ5mFH6Y9xjCG39meavgqt%2B%2FS%2FSzoruzoJDVuFnhMrhEML4zeHWKam4iJ1Qz%2FWlmIC2lOj5iAZliQKSYL1V3XaxpmV4o2NVSo5cGQgMiMJMI8lRaBIUB3zlKEq%2BzpQXYjk5zXK9EltqbfqR%2B67hSuQ237AcWjc%2BAPleq9uuDPzXnxduq%2FCl9fk4pLHNkNtZxWlUPTWFSTYySmRn9RBTvMIQt5JT9QQYsADjPKLr2lFFlrB2gCTVTRR19BFSO1cfANsFJ8HdvAG4oUB9I2M%2B0P0xVlAHPIv3IrJ3wdhYfejvmPmO%2FiAK8WproWS07ZDYVJGRxQ%2B3tvdzoiIuCNXyEaAY85u1mwtpgo%2F0n58AngohYq%2Bfg6kYUnKhhjEAXLvNoNQui%2FUHdiJHEoM30KmLOMZnwPmc%2FFoBldqxwmilfmsYkl%2B3f2HIO%2F55y%2BdSyvNqnoZoX63cJVxqoKSq%2BJsFgLWJXmqEZWceQWESep3WIdG6keQe5tE42Qbbm8enNzfKAOr9np%2F0DUy%2BTb8Un0IGA7V1V4U%2BtlTNu6V%2F6%2Bg04iggfEID2OOeWzQymzYtWBuQUJ%2Bi4o6%2BhwDYfYWk8wDcjC75KzBBjqkASrflw8MN3ATk5I5fuzmg34xenWYweK5OQDbcuHSR%2FwxKe7p0WwVfKsh9C1g1bPw0N%2F%2F6Hg7toVqT1dJfTcV4AWnm3skJAnRv5Bk1jpvtsJnsbCUf6zE5O%2Bz%2BiZRGJBNdzv%2B%2FH4OgQlReUIMDfvHNAdmgeTi4E8Qzoo7ZjmK4qizpJi7w2NikjRuDqEbuhXKBJXzOsVrw2qu2r67uCzbvr1SFFxN&X-Amz-Signature=74775c367151e65ada240e98eb1d8db821b34cfd9b6c91ebf734f21377a4d927&X-Amz-SignedHeaders=host&x-id=GetObject)

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
