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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRINB4E%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bNBSPw5P2CiJuyDQYvOBdkJWcarD%2BoR8wskBlOywnwIgV9xIC54xYXQYF7aKFDVMaW%2BpORUNKFjIu2R%2F69eWjB4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF0TnQrFrg0%2F%2B%2FLISrcA3M7MGGsZmnXA6gp3EllD18wW%2FX3SOur71FXRPuY3AFduAH6uEOT5hjQM7c3Saz%2FNMdmkW5JCkHvnQD%2FK0vV84t2pYvMAgvUMiasKUo%2Bm5u76OOZ3F61anhXNTa25YlZmkZ%2FqyKBLXpiHpI87mv3tBMdG61ZUPbY9j2H7Ye4zXzaF3FpfR6Gb0hcKuHFi59NQfribPBBJuVj2RFLlLXDaosUQrC0gsa2QMsICRMI1okwCbWutz1wUpn6UpNcBo3e7qQVJ33FptdTLzNYxkRKG2fO3ZxWPYcN4y1YshMUWUKNO9%2FAOPaKC3q7FOlXknlPUSOhm9otgIX7cy%2BXIQ0sMzQywI8Lk1ot96vL40XUj7iojpUVCxuCvjN22KoPAyA7w0doWPoopGqi%2BTtBTNt8sqytSMxa9uUtJh5SJ6XP86FwXx1stirHquTe4nZTDI355hz6KvC9M1bLLITJKb1fTv7fTyIZ7nLhunv6Pvzi89TwEBYX4g3v2Ng1KZwB53eCK88KKArM2phREQVSTsa8xyE7YAqCc5Frdp%2BQ5ZbTBvLHO%2BwCUjMJ25G%2FB2GlVz65d7IaVodhbTchLIdmta9PW0kDscg3HWu2PjPirbIENOz6MS4p15FePACPDNyNMJDWm8IGOqUB%2FarvpFEnZdFtRgqOUDhXV%2BYz1q5CsRAOWLGhPPFpQnLIZyRdQdvPGpebHvFBmACjBmAcVIccE7270f0q8qjsuP3LLL%2FW%2F0CgLI7vafVZ2tPhg9RFpoJKIhBqIFB9Sp6pZGEy7l0iUy8CF4HN3g%2FuBxIQAJwBHsLnRdmNRFh6NvSfv7xOhxzkrTPxYsRFtdYfVoK4UhuOEmWxGwGnW%2ByB1A5%2BvPqH&X-Amz-Signature=dddc4869782bd3b196324b57e2b4d81d60adfa89f2a54521c22157ddce32f837&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRINB4E%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bNBSPw5P2CiJuyDQYvOBdkJWcarD%2BoR8wskBlOywnwIgV9xIC54xYXQYF7aKFDVMaW%2BpORUNKFjIu2R%2F69eWjB4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF0TnQrFrg0%2F%2B%2FLISrcA3M7MGGsZmnXA6gp3EllD18wW%2FX3SOur71FXRPuY3AFduAH6uEOT5hjQM7c3Saz%2FNMdmkW5JCkHvnQD%2FK0vV84t2pYvMAgvUMiasKUo%2Bm5u76OOZ3F61anhXNTa25YlZmkZ%2FqyKBLXpiHpI87mv3tBMdG61ZUPbY9j2H7Ye4zXzaF3FpfR6Gb0hcKuHFi59NQfribPBBJuVj2RFLlLXDaosUQrC0gsa2QMsICRMI1okwCbWutz1wUpn6UpNcBo3e7qQVJ33FptdTLzNYxkRKG2fO3ZxWPYcN4y1YshMUWUKNO9%2FAOPaKC3q7FOlXknlPUSOhm9otgIX7cy%2BXIQ0sMzQywI8Lk1ot96vL40XUj7iojpUVCxuCvjN22KoPAyA7w0doWPoopGqi%2BTtBTNt8sqytSMxa9uUtJh5SJ6XP86FwXx1stirHquTe4nZTDI355hz6KvC9M1bLLITJKb1fTv7fTyIZ7nLhunv6Pvzi89TwEBYX4g3v2Ng1KZwB53eCK88KKArM2phREQVSTsa8xyE7YAqCc5Frdp%2BQ5ZbTBvLHO%2BwCUjMJ25G%2FB2GlVz65d7IaVodhbTchLIdmta9PW0kDscg3HWu2PjPirbIENOz6MS4p15FePACPDNyNMJDWm8IGOqUB%2FarvpFEnZdFtRgqOUDhXV%2BYz1q5CsRAOWLGhPPFpQnLIZyRdQdvPGpebHvFBmACjBmAcVIccE7270f0q8qjsuP3LLL%2FW%2F0CgLI7vafVZ2tPhg9RFpoJKIhBqIFB9Sp6pZGEy7l0iUy8CF4HN3g%2FuBxIQAJwBHsLnRdmNRFh6NvSfv7xOhxzkrTPxYsRFtdYfVoK4UhuOEmWxGwGnW%2ByB1A5%2BvPqH&X-Amz-Signature=4427e1548433659cc8c62d235d683e6b1f336ff010a0fa8f3753324e7050c613&X-Amz-SignedHeaders=host&x-id=GetObject)

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
