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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GE62VEP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzltfvZ8%2B8BCPeIs1HBG9W3%2BXVLgPdQX89Y6hiKzDmrgIhAJpWldioppLIDLz9AwBLECbkpZrkLFMXgvLATPvN9KB6KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb2ceZ23jE0GUFsvcq3APTEo3qquM3zjQkH0rJB17DCHgpllTaQ6lYXllf65SFnk97MkNaf%2B9f8QgIYWaGx2mF8ZklHfW%2BVuWINJa4HLQrAykqzuemasc4uUXI0RYyXPBHW%2Byqt1ltw3JwR3X%2FbUmquXeYJ%2B%2BNBjkxmJuPoytqrkSpzNn68wFPVArcNIXVfXQQ1hqejzFsYz%2FB0PAFZDbobRJOTyU8rs95ziwFoxU9hZBe3RoTQa7Bg2cIxn%2FvYZKtzYHJq6akdMjW%2Bsz0W1Fu%2B4peFnuPEacZWmW2S7Ve7Jh0BGqRoYzMgNdknBG%2FGs%2BdfXCeEGV3yYgS%2FwHJsjn0HSzbvm00H9Qp%2FWV1pFMJW1dDA5d1wdDDBSSvSpz3NRrW6f%2BNmmQbiWekPgQGqNhPADW%2FwB%2BwJji9uW2JOjmnRcZyCteKH9Q9gm6q4zd5bld3cjlBQBM5ihUsXirJrf256uKzqwVdbug2FIdz%2B4jDQz4nHTd6QRG2xvOMQpTOYRNHdB43FuApZKYZe0%2F%2FoRnbdX%2FfcbsqXOH%2BqxNKtmNzZc4L%2BZxp3DiEkVMG1mIxAhDlAFEoYYZGOd7nLYnThomhZm3kE23dAqdhIBrLc5Fse%2BX16lHjdMMqvoyMyb73cOPjJVNi%2BVzHLMelNzDnzYe%2BBjqkATfgAuMU50Dj8IN89P2uf6Fv2Ay3defxwjw2wXA%2FoYYzFCKpo09jFvr6%2Bn6Chq4uc7ksKKXwyG7GWYWcbrShvRl7qqdB688E%2BQt9iXmKqd%2B1NP%2FIOtja7VRfZyI90d2q6z4j7azB0SIHj1d3FKeXUDsKpNiiVMDBe%2BzBviYChJjA9gyJdMD0gTIHZ0%2BQxrza2HK160ELtnmX7vHG2kH5gR8IRilk&X-Amz-Signature=0a2b898b098f48f6c8fbc5cb59e2284bb04caa3a632c66b919993b022a207d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GE62VEP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzltfvZ8%2B8BCPeIs1HBG9W3%2BXVLgPdQX89Y6hiKzDmrgIhAJpWldioppLIDLz9AwBLECbkpZrkLFMXgvLATPvN9KB6KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb2ceZ23jE0GUFsvcq3APTEo3qquM3zjQkH0rJB17DCHgpllTaQ6lYXllf65SFnk97MkNaf%2B9f8QgIYWaGx2mF8ZklHfW%2BVuWINJa4HLQrAykqzuemasc4uUXI0RYyXPBHW%2Byqt1ltw3JwR3X%2FbUmquXeYJ%2B%2BNBjkxmJuPoytqrkSpzNn68wFPVArcNIXVfXQQ1hqejzFsYz%2FB0PAFZDbobRJOTyU8rs95ziwFoxU9hZBe3RoTQa7Bg2cIxn%2FvYZKtzYHJq6akdMjW%2Bsz0W1Fu%2B4peFnuPEacZWmW2S7Ve7Jh0BGqRoYzMgNdknBG%2FGs%2BdfXCeEGV3yYgS%2FwHJsjn0HSzbvm00H9Qp%2FWV1pFMJW1dDA5d1wdDDBSSvSpz3NRrW6f%2BNmmQbiWekPgQGqNhPADW%2FwB%2BwJji9uW2JOjmnRcZyCteKH9Q9gm6q4zd5bld3cjlBQBM5ihUsXirJrf256uKzqwVdbug2FIdz%2B4jDQz4nHTd6QRG2xvOMQpTOYRNHdB43FuApZKYZe0%2F%2FoRnbdX%2FfcbsqXOH%2BqxNKtmNzZc4L%2BZxp3DiEkVMG1mIxAhDlAFEoYYZGOd7nLYnThomhZm3kE23dAqdhIBrLc5Fse%2BX16lHjdMMqvoyMyb73cOPjJVNi%2BVzHLMelNzDnzYe%2BBjqkATfgAuMU50Dj8IN89P2uf6Fv2Ay3defxwjw2wXA%2FoYYzFCKpo09jFvr6%2Bn6Chq4uc7ksKKXwyG7GWYWcbrShvRl7qqdB688E%2BQt9iXmKqd%2B1NP%2FIOtja7VRfZyI90d2q6z4j7azB0SIHj1d3FKeXUDsKpNiiVMDBe%2BzBviYChJjA9gyJdMD0gTIHZ0%2BQxrza2HK160ELtnmX7vHG2kH5gR8IRilk&X-Amz-Signature=cfc70141f7ad416782ca3a4214427eebfe79f02ef567eab45638a08c196dcbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
