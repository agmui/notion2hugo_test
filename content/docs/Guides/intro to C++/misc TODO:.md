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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3CLPRY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDH2v1lRY0lrqC2fEI7Q16oV6SmnYLpZcLRjCA2oR6UrAIgPinm92W%2Fl2BIKptk2TriYyaIFOTfw5O%2FXILW8xFVm0oqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMqYxi%2FaaGhb13WYCrcA0C5AH54N5fQapVVM38QzeUYDwGHpkaxQOrk7Xru30UbwpLA4CSOxWA6ZVUlpNTkUG3ySwOw4B0ZA8SsydKGTtmoQZMkfzjozm6NNZApCYTYoiDnBhvWLrDnDnaFHSOl82IG8P%2BSPAq7iCFbYQH%2F7B0JnkaVPVBJpKqzFSVIsCrUuOnbMNpHiRuZX6gQLrhMAZ3VWWLlp6QLCwO9bPx92MT%2Fhm3dfxK%2Bf%2FkqYZg9aD7ZHkFnoP4QN967%2Bp2NfvgcX%2B%2B9QwaBhsCWYpPUqYgCzCsW0r8iImRYa3BqFENkoOwJ328DPm6xvfVJixYOnCkCc%2FpsQyO%2BU0keFxfPvUzmL5h22lbuB%2BqrmS4dCXQRNzrmfVzCAIRp5nYSV6869XRr1e%2FUyLe3%2BSJm67Kn%2FWimfkQ%2FMHh%2F0H2Lt0Xck28YMECvmI1Sk2v2lVWkB5cxwkPNDrQdss4%2F9386FeuZajIbx72%2BtFC%2FeZnP7R3n%2BW8XzRxwepnn6eXo3Co5U0xNiZO8TVnp%2BjnL8efbechJQ0QD3DgFd4nu8yJuU6e%2BqI86B7O8fI%2B8lqbQOyiHpGovtfNq4qfLl5SEJzrzuwh5BGD%2BqVoLc32N7%2BCHEbUyw527GCkw1VBytxQnBR%2Fe8u%2BWMJOcxb4GOqUBU7RWcp8YBpaoOTw7AcSkqHC4Kr3nPbzK3HmC6SrVHdPwf6SNpwp5B3HZeAU6%2BlTsS7n3XGZ1WWRB%2B8y4RiUoRXjl0uwCQG3NghfWKV9YZ4B%2FcL%2BiIq4UN6MXUdDs8wUNrvfsXPTAx1br0T%2BZgwyQ9iQ%2BpHYJqO%2BHD1JoaHvPzU29%2FRNCcP4XwPbkxFIgP%2Fj1WZSsiLpq2jt1XwsAJYbC5fz04ZmQ&X-Amz-Signature=9ac379bb2b0cca25e57aea7ab0650082bd8064a58ce4876a72324a774617940d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3CLPRY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDH2v1lRY0lrqC2fEI7Q16oV6SmnYLpZcLRjCA2oR6UrAIgPinm92W%2Fl2BIKptk2TriYyaIFOTfw5O%2FXILW8xFVm0oqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMqYxi%2FaaGhb13WYCrcA0C5AH54N5fQapVVM38QzeUYDwGHpkaxQOrk7Xru30UbwpLA4CSOxWA6ZVUlpNTkUG3ySwOw4B0ZA8SsydKGTtmoQZMkfzjozm6NNZApCYTYoiDnBhvWLrDnDnaFHSOl82IG8P%2BSPAq7iCFbYQH%2F7B0JnkaVPVBJpKqzFSVIsCrUuOnbMNpHiRuZX6gQLrhMAZ3VWWLlp6QLCwO9bPx92MT%2Fhm3dfxK%2Bf%2FkqYZg9aD7ZHkFnoP4QN967%2Bp2NfvgcX%2B%2B9QwaBhsCWYpPUqYgCzCsW0r8iImRYa3BqFENkoOwJ328DPm6xvfVJixYOnCkCc%2FpsQyO%2BU0keFxfPvUzmL5h22lbuB%2BqrmS4dCXQRNzrmfVzCAIRp5nYSV6869XRr1e%2FUyLe3%2BSJm67Kn%2FWimfkQ%2FMHh%2F0H2Lt0Xck28YMECvmI1Sk2v2lVWkB5cxwkPNDrQdss4%2F9386FeuZajIbx72%2BtFC%2FeZnP7R3n%2BW8XzRxwepnn6eXo3Co5U0xNiZO8TVnp%2BjnL8efbechJQ0QD3DgFd4nu8yJuU6e%2BqI86B7O8fI%2B8lqbQOyiHpGovtfNq4qfLl5SEJzrzuwh5BGD%2BqVoLc32N7%2BCHEbUyw527GCkw1VBytxQnBR%2Fe8u%2BWMJOcxb4GOqUBU7RWcp8YBpaoOTw7AcSkqHC4Kr3nPbzK3HmC6SrVHdPwf6SNpwp5B3HZeAU6%2BlTsS7n3XGZ1WWRB%2B8y4RiUoRXjl0uwCQG3NghfWKV9YZ4B%2FcL%2BiIq4UN6MXUdDs8wUNrvfsXPTAx1br0T%2BZgwyQ9iQ%2BpHYJqO%2BHD1JoaHvPzU29%2FRNCcP4XwPbkxFIgP%2Fj1WZSsiLpq2jt1XwsAJYbC5fz04ZmQ&X-Amz-Signature=bec57fd2d1d8dad339defe917c9c4d4b98d8f8ca8f23d9d2ab47d119239a2e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
