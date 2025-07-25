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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHKV4MJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCIGrNjitdrjqWgpNuC4hRuduwAZxpPCdSTcR%2FnGo8uyAIhAJIexohCiu%2B5J12riBYm7NmZ6Bbv0Lrbo%2FguzJC5jXPUKv8DCE4QABoMNjM3NDIzMTgzODA1Igxxi0k1YZEAx2der1cq3AOChDXvnIV%2BUnMrj%2F6Kic6zxWITnPj2i9svQFGGAnN%2BdEmecE%2FggwVcNeQX6aeSjESCeCCwebAOu%2BDMH6GA1pO5ectEe4JgNPC8SWbfk%2FTCIOgYfkwxilOp2RPe8EQPKquxvKMgsAOYHjrCngnWZVxvnw09NqBaufFnJqCSPY9oCquS7PGd4n8wodoAttgt3Uy%2BmQni8VaKt1IKxVtHwsKxQUzj0tQ4gC3zEt9OTq74rugfadMdBRbjT7mEj49DzzuJ8zdNk%2B6qkcVtusO72U1XGch%2BGVoJgtFe88FYD0al0t6BQeWw3k7LYL5Y0oYOL5MNGZyXE%2BvZv6V4H1WFhIpAkaG2CyxsOCKrFlpnHQWuN4rRgROn8yVcIvtE1xPTJc1y7jPbFdlSAxWpVXDI%2Faf1%2FKW9r2JryUQqh2PGwzB3nc8q3T6YnVS0Ru69p7Uk9pm1%2BBVRkP6RrNPdpWE6527x%2FcQzICd0jEaPtuynwuxpKNuj9wiOZ4p2mVpUdEVNeBoxYie3nGOx6Cw8UrzSqlPE1%2B1cSFFPbHaN27UKNQ37hC6OwSijYdED1IBGye4hEYrtXyfqmDew09BmGolK%2Fi2ZtlY%2F4fwloSCReaOKF9jMb9jjIuV9I5giz%2BjjpzCL0Y%2FEBjqkAYAMfyEuV7POISfskjAjotp4r58lkufYSMPikYD5FAAYzvvl5XkYC37JObie9VLK85nh%2BXeMBaDm%2FN9c%2FHlknqkRXE6qkhCUNWHaW6Xn4sKk8dYpiaXQpmR1dk%2FXHR6pGilYWQRaQVy3Ri9o9oQPmyYy%2BSyZWC%2BoA3p5odAk3XhfLMz51mV3rgui9qi0rojo3E%2FvslDTxNpLtdFuSqnzHmQ5TanK&X-Amz-Signature=9b479fe82b0a1779f99f0f7ebb588a720b8ef77090644c69267b49e42a5d5ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHKV4MJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCIGrNjitdrjqWgpNuC4hRuduwAZxpPCdSTcR%2FnGo8uyAIhAJIexohCiu%2B5J12riBYm7NmZ6Bbv0Lrbo%2FguzJC5jXPUKv8DCE4QABoMNjM3NDIzMTgzODA1Igxxi0k1YZEAx2der1cq3AOChDXvnIV%2BUnMrj%2F6Kic6zxWITnPj2i9svQFGGAnN%2BdEmecE%2FggwVcNeQX6aeSjESCeCCwebAOu%2BDMH6GA1pO5ectEe4JgNPC8SWbfk%2FTCIOgYfkwxilOp2RPe8EQPKquxvKMgsAOYHjrCngnWZVxvnw09NqBaufFnJqCSPY9oCquS7PGd4n8wodoAttgt3Uy%2BmQni8VaKt1IKxVtHwsKxQUzj0tQ4gC3zEt9OTq74rugfadMdBRbjT7mEj49DzzuJ8zdNk%2B6qkcVtusO72U1XGch%2BGVoJgtFe88FYD0al0t6BQeWw3k7LYL5Y0oYOL5MNGZyXE%2BvZv6V4H1WFhIpAkaG2CyxsOCKrFlpnHQWuN4rRgROn8yVcIvtE1xPTJc1y7jPbFdlSAxWpVXDI%2Faf1%2FKW9r2JryUQqh2PGwzB3nc8q3T6YnVS0Ru69p7Uk9pm1%2BBVRkP6RrNPdpWE6527x%2FcQzICd0jEaPtuynwuxpKNuj9wiOZ4p2mVpUdEVNeBoxYie3nGOx6Cw8UrzSqlPE1%2B1cSFFPbHaN27UKNQ37hC6OwSijYdED1IBGye4hEYrtXyfqmDew09BmGolK%2Fi2ZtlY%2F4fwloSCReaOKF9jMb9jjIuV9I5giz%2BjjpzCL0Y%2FEBjqkAYAMfyEuV7POISfskjAjotp4r58lkufYSMPikYD5FAAYzvvl5XkYC37JObie9VLK85nh%2BXeMBaDm%2FN9c%2FHlknqkRXE6qkhCUNWHaW6Xn4sKk8dYpiaXQpmR1dk%2FXHR6pGilYWQRaQVy3Ri9o9oQPmyYy%2BSyZWC%2BoA3p5odAk3XhfLMz51mV3rgui9qi0rojo3E%2FvslDTxNpLtdFuSqnzHmQ5TanK&X-Amz-Signature=d36bad3251138a9e40c2ea57dd46b73f301ccd783a0026d6dd067ce91181117a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
