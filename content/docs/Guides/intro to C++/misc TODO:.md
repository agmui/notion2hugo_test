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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGBPEJP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKp9Rmuhu2tll9L1nYCVID66I%2FtxSu6tno%2BhmMMy6ASQIhAJYfE4%2BlVvjcR300RhmIhPKhINDMFdE0L7uVzzurOYmCKv8DCDEQABoMNjM3NDIzMTgzODA1IgwSUST7YvY5OGc%2FNpAq3AOM0XhQZHbUhreRlw8Zuo1KBSo185%2F9g2BDEIOheLbXAs5nGNgVkP3iRvVSww0x0HkSthXVcUukOrwkqKaLV5Ms096KMO0sjGYXwqgmXfZR8tmovKXj%2Fj6rEnlinNeomNWMhp%2BuSUUJOACU9mD%2FaYIrnVyKRA9%2Bq7WYwo4gv5RY50YDggkclC%2BLT%2FP0byih2pNvOHR%2Fhjzv8ehKMNDw21ZbQ8kozqb0YNN%2Ff0BX0b3MtDmvHFNOKiZAK5x2zCOOKbXN%2F2i2r7rB5sV8%2BsE9IKHjbqztqly12ZiR3RfRtnyTEC02HTYqenoTwa9EW1m0wAhJQUNhB0ulkbjhVC2UnDpQRAWL%2BAno0hgm4DcmgJdVKSHKYfZghHJ3KbvKoUsoRhY004GaI72IH4DkXg8dxtoQjDNZE%2Bc%2Fuzj%2BKV7wqvYbV15xxAmmJIGfPT%2BjvgE3qK6G4gfOM7LdYK0mULG0OXXXkxgMcRdwZPkBMqKFWUzQ7g%2BwGT0dyBlV5tTDta6RCAAnupHUrUkl84v9jJqJS2RaDR2yGOz0H54YuS41BktShAw7NFLvUOHK3L%2BtOMWB%2FIcyJsLAlwkXfS64ETWTqE856nsa%2FQeaBdqbtZvx71I31r8FXaMbne1FXMmr%2FzC2kKe%2BBjqkAcWZi8ggmh9jc5AhtmxZDOs5YrpbxoP0szrTVkT7btc7JQFLWik0%2FkhPYV8GaCwSFAW2lG35lZAinKmsj88DLsaB8bIiOhLPB8e%2B9DDlLDPZJVYQ%2F2eUIrCdmIg5yj60Jg0vJrMtNVHiFz1SWGWW9L7T7r%2Ft0LJuliYYLTuZ2hT%2Bh6cttADLitwqM1iHohSC4%2BpMD2%2Fy29mQFXOdIarJXMyI6cdV&X-Amz-Signature=15afa196149064ae62b4ae808b65a2d7b295dda60eca51a75e5ec1e80ec97e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGBPEJP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKp9Rmuhu2tll9L1nYCVID66I%2FtxSu6tno%2BhmMMy6ASQIhAJYfE4%2BlVvjcR300RhmIhPKhINDMFdE0L7uVzzurOYmCKv8DCDEQABoMNjM3NDIzMTgzODA1IgwSUST7YvY5OGc%2FNpAq3AOM0XhQZHbUhreRlw8Zuo1KBSo185%2F9g2BDEIOheLbXAs5nGNgVkP3iRvVSww0x0HkSthXVcUukOrwkqKaLV5Ms096KMO0sjGYXwqgmXfZR8tmovKXj%2Fj6rEnlinNeomNWMhp%2BuSUUJOACU9mD%2FaYIrnVyKRA9%2Bq7WYwo4gv5RY50YDggkclC%2BLT%2FP0byih2pNvOHR%2Fhjzv8ehKMNDw21ZbQ8kozqb0YNN%2Ff0BX0b3MtDmvHFNOKiZAK5x2zCOOKbXN%2F2i2r7rB5sV8%2BsE9IKHjbqztqly12ZiR3RfRtnyTEC02HTYqenoTwa9EW1m0wAhJQUNhB0ulkbjhVC2UnDpQRAWL%2BAno0hgm4DcmgJdVKSHKYfZghHJ3KbvKoUsoRhY004GaI72IH4DkXg8dxtoQjDNZE%2Bc%2Fuzj%2BKV7wqvYbV15xxAmmJIGfPT%2BjvgE3qK6G4gfOM7LdYK0mULG0OXXXkxgMcRdwZPkBMqKFWUzQ7g%2BwGT0dyBlV5tTDta6RCAAnupHUrUkl84v9jJqJS2RaDR2yGOz0H54YuS41BktShAw7NFLvUOHK3L%2BtOMWB%2FIcyJsLAlwkXfS64ETWTqE856nsa%2FQeaBdqbtZvx71I31r8FXaMbne1FXMmr%2FzC2kKe%2BBjqkAcWZi8ggmh9jc5AhtmxZDOs5YrpbxoP0szrTVkT7btc7JQFLWik0%2FkhPYV8GaCwSFAW2lG35lZAinKmsj88DLsaB8bIiOhLPB8e%2B9DDlLDPZJVYQ%2F2eUIrCdmIg5yj60Jg0vJrMtNVHiFz1SWGWW9L7T7r%2Ft0LJuliYYLTuZ2hT%2Bh6cttADLitwqM1iHohSC4%2BpMD2%2Fy29mQFXOdIarJXMyI6cdV&X-Amz-Signature=de3e3e9502c91c09b869e05d33b47883ea7bd5175bc457abce4fb4d1513a7dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
