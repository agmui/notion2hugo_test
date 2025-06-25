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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZU3E5H%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCHynBrPqA0EL1WBMxkYDrxL2qTmk7gVg57VJoaFTiCM0CIQCvYILnZdiNsbV%2Bumvn2zM4FyW4u0T4oWaMY4Kc9tssqSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM%2FLWBNk2wGeZrNZrhKtwDCiBTHO7zvVVaHdYWLljbWilpojQ5XVxfbwpMdBsrLK2p7pzZtifp9mk%2BA%2B6lR6%2BVHZppKoU9tZhuDDMlPGY%2F91Ot2UgftHDQEf7JAnXzVYpAoBoibXehqmcH3QWB830uY6ifWs6FmWvjuN8IM3gcAKv5VPepf2VdWRL%2BYK4kt01kSXqsE0Js8V5pUXXIn8%2Box5PYzw5sLV%2Bkkd38468stltdGkLXo8EZRm8Sf76FlfrOY7tMLaZrhUWa6C%2BSBSs%2BBqcCWk%2FItTAPNvAdLtoXWaZLFdbiYI0TMbIU7ojeXWpdlv%2B0JcOngKdCycsmkSYtCZCbsSPcHgdrWDuEk%2BKhOS5g6Vnq5e%2FDXbmmH5ccHKKGhSYJYQOovAB3MPzGE7jUTsoLRinLo98SLQRz%2BzJghoK08G2ShUKlj3v20BQ15sj5R7VZLJ4svxP%2FOqrp9NR3GiNoVDhaHhhz5B9DSuyvNUDPzyNS00uF8V1aVTfbHEjXMnijhTGNu2mVxdRqSb5HzNXWRrWJ6l6xhmpQ6LwRxbZy2ZZL52CSv1U996tB669s4Po1%2FsGk65JdZAGmXCIm9G%2FqlM34Qg1SNEzQhRkIVef6Fn1u32ucqi7JnDVM4nWOQnVezwPtLyN9EFAw493uwgY6pgHzXQcjr7pNoA6GocoCiKWqRAOUwZCi2G%2B7jc%2BIVzagEovOatVAkr9lFr7NmEqqri9WFV6N4jD21MDTMT7%2FPoYptvdV8t3FQCDukPhoPUYgc%2BKDd7ZplbqZjTV7%2BVMlFQx2pSaPZflMU%2BD2QMxA0dLP7e1n7z8%2B%2BqWVg8zFt8bQk3AZWiBvTzZS8bAR5eQRf8vPRlAZ8QiX%2BOPcqcC%2FaegI6DNfy1mx&X-Amz-Signature=9fdcf7cd5cc9a6067c6ad73e002ff0fd61ae3955d6fde47054721c39aeda8e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZU3E5H%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCHynBrPqA0EL1WBMxkYDrxL2qTmk7gVg57VJoaFTiCM0CIQCvYILnZdiNsbV%2Bumvn2zM4FyW4u0T4oWaMY4Kc9tssqSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM%2FLWBNk2wGeZrNZrhKtwDCiBTHO7zvVVaHdYWLljbWilpojQ5XVxfbwpMdBsrLK2p7pzZtifp9mk%2BA%2B6lR6%2BVHZppKoU9tZhuDDMlPGY%2F91Ot2UgftHDQEf7JAnXzVYpAoBoibXehqmcH3QWB830uY6ifWs6FmWvjuN8IM3gcAKv5VPepf2VdWRL%2BYK4kt01kSXqsE0Js8V5pUXXIn8%2Box5PYzw5sLV%2Bkkd38468stltdGkLXo8EZRm8Sf76FlfrOY7tMLaZrhUWa6C%2BSBSs%2BBqcCWk%2FItTAPNvAdLtoXWaZLFdbiYI0TMbIU7ojeXWpdlv%2B0JcOngKdCycsmkSYtCZCbsSPcHgdrWDuEk%2BKhOS5g6Vnq5e%2FDXbmmH5ccHKKGhSYJYQOovAB3MPzGE7jUTsoLRinLo98SLQRz%2BzJghoK08G2ShUKlj3v20BQ15sj5R7VZLJ4svxP%2FOqrp9NR3GiNoVDhaHhhz5B9DSuyvNUDPzyNS00uF8V1aVTfbHEjXMnijhTGNu2mVxdRqSb5HzNXWRrWJ6l6xhmpQ6LwRxbZy2ZZL52CSv1U996tB669s4Po1%2FsGk65JdZAGmXCIm9G%2FqlM34Qg1SNEzQhRkIVef6Fn1u32ucqi7JnDVM4nWOQnVezwPtLyN9EFAw493uwgY6pgHzXQcjr7pNoA6GocoCiKWqRAOUwZCi2G%2B7jc%2BIVzagEovOatVAkr9lFr7NmEqqri9WFV6N4jD21MDTMT7%2FPoYptvdV8t3FQCDukPhoPUYgc%2BKDd7ZplbqZjTV7%2BVMlFQx2pSaPZflMU%2BD2QMxA0dLP7e1n7z8%2B%2BqWVg8zFt8bQk3AZWiBvTzZS8bAR5eQRf8vPRlAZ8QiX%2BOPcqcC%2FaegI6DNfy1mx&X-Amz-Signature=7d395d468e262f7c69700e5eeaba3272d089b6160e6f694d6f2035f28b525d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
