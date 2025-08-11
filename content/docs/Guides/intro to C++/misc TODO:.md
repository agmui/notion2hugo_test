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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4HWLTC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAojeKfmxG8oOCn8OOundJ1ELW%2BDT4TU7bkNpKnE1GWIAiABFwn1hps%2Bjag3DE9UNNgNeD0o5RclUcWOuJxft2aI1iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOffuSduhOxeBLUYcKtwDJSeZpgrymuP%2B3VXJqhaKXhfsTrf%2BlVUtDRIsu0qGXs6aOhBbep7PqkDLLcnp3uDdDJpvy%2FM1ap5TL%2FbTTMmrOTmzzigrL%2FL8Cpd4cVDKWQwkRBLnIMzPAG0tt%2BkopIyTTPIIe4IvKj%2FmqgI3P5aezg0tHJrGCVvRFNIuK33CZ3JuGRrgZyVjxKCBXU3MHSdPT4wV5oY7ahcQbTNAK%2FWIncC5lGAIZPFacgY55WDcqT%2B28fnPdTGNJi%2BRfHWjbOeBLlOwkATEfrEdIeAKXYzjeZsynKaOiDsMmurymusk%2FBOqLwPNLpKo%2FYFXSbtYtv0n0HaghEj9wOTiq0BHRwbMfnpBUKt0kxIwIkbZd981Jn0BpzVETU9wBqVDDqvJiLoZVx78eFOg1rnAtS8xBqExRdw2Rl5bFjAtIC67FpBnBpJ437Lk4e5aB8481ybCSe67N33kz%2BLy1s0e6u02Rq79dBwMUgiRkcn8ay3lDs2faSp%2Bq4O6cQvgdn7iJKrBj%2F0GWk7X%2FPeBwT4Kd1f0y9VvjJFeai2UbqTLlnIoletBNPD6dp9z5oZCtPyCZqTQAUNktRONDt0YQcaAnHZmwclxaN5ddhhyB9nhwPg7agiT328uEaQ%2FSmEL0NqMokcwjvflxAY6pgFu3eWAJQ%2F5DymRghS1E2%2FzoX0k%2BA7VC6Hh14NTS06xNWA%2Fx7R5dIMjDLHrJEFxsg8SFEMcOiMaeAXeJVm9V0GTDy1y54m7p9W0D56IlaIq4uNdFN0yle%2FIO4z%2BUux0ytXAyKqH4At9EKrcZ416lLM%2FhDlzigQEYFMV4NweIYabWw6W%2BYSbdYrCTtIv3RDQIh6DvpBeI8dGauF6sNDKqu%2BUCkXRcvej&X-Amz-Signature=2a7ce68ac8691b2dea12a095d2c363990972f1391d48c84c05eb3d2a0e175f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4HWLTC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAojeKfmxG8oOCn8OOundJ1ELW%2BDT4TU7bkNpKnE1GWIAiABFwn1hps%2Bjag3DE9UNNgNeD0o5RclUcWOuJxft2aI1iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOffuSduhOxeBLUYcKtwDJSeZpgrymuP%2B3VXJqhaKXhfsTrf%2BlVUtDRIsu0qGXs6aOhBbep7PqkDLLcnp3uDdDJpvy%2FM1ap5TL%2FbTTMmrOTmzzigrL%2FL8Cpd4cVDKWQwkRBLnIMzPAG0tt%2BkopIyTTPIIe4IvKj%2FmqgI3P5aezg0tHJrGCVvRFNIuK33CZ3JuGRrgZyVjxKCBXU3MHSdPT4wV5oY7ahcQbTNAK%2FWIncC5lGAIZPFacgY55WDcqT%2B28fnPdTGNJi%2BRfHWjbOeBLlOwkATEfrEdIeAKXYzjeZsynKaOiDsMmurymusk%2FBOqLwPNLpKo%2FYFXSbtYtv0n0HaghEj9wOTiq0BHRwbMfnpBUKt0kxIwIkbZd981Jn0BpzVETU9wBqVDDqvJiLoZVx78eFOg1rnAtS8xBqExRdw2Rl5bFjAtIC67FpBnBpJ437Lk4e5aB8481ybCSe67N33kz%2BLy1s0e6u02Rq79dBwMUgiRkcn8ay3lDs2faSp%2Bq4O6cQvgdn7iJKrBj%2F0GWk7X%2FPeBwT4Kd1f0y9VvjJFeai2UbqTLlnIoletBNPD6dp9z5oZCtPyCZqTQAUNktRONDt0YQcaAnHZmwclxaN5ddhhyB9nhwPg7agiT328uEaQ%2FSmEL0NqMokcwjvflxAY6pgFu3eWAJQ%2F5DymRghS1E2%2FzoX0k%2BA7VC6Hh14NTS06xNWA%2Fx7R5dIMjDLHrJEFxsg8SFEMcOiMaeAXeJVm9V0GTDy1y54m7p9W0D56IlaIq4uNdFN0yle%2FIO4z%2BUux0ytXAyKqH4At9EKrcZ416lLM%2FhDlzigQEYFMV4NweIYabWw6W%2BYSbdYrCTtIv3RDQIh6DvpBeI8dGauF6sNDKqu%2BUCkXRcvej&X-Amz-Signature=aaae935c6db737c7cb97b57fc83169c2c2b79ea2055455c9038ff0a3c89054a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
