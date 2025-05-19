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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPQ5QXH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK9qVOwLJhkeWBp0bc8Fqe8rI4%2FBiqSVDRYC5sU6KdLwIgJ8uez4ISY931PKYXwwACzGov8TSIzgjMufuz4EdHgmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BvS6xDUMCXj8NQQircAw9QZGio8YRIzFPUt5T1%2FckPFn8xfSGowtLyrW0u3IBJp46edZ2rXz%2FxG1LxWUVcWWN0FCrMdWf3Ui%2FxPbxj%2BbB8XJxGAkLhAKRr06YMYQWO0V%2Bmi7JycB1uUm%2BqmviNQdUrfGbgGpszG5LOjNsFPv7%2F2B2Dyco3slm2E%2BEf1sTT9PQA218%2FSs8Xadx7i2ex%2BJv0qhhSwqFIaw%2B4s8cmbHXFO0DVGM7oEzFIbRuUPgHZT3PE09r5GZ6LGoP%2BR8k3U0kK96Eqq9Q%2BthXfgsmWqHB6Hg5AxRVyA3C%2FWc2zrO%2F97jyNR8%2FSVuUdocZ%2Bh6%2Fy09W%2F738pL3v7J4ceomDfAHD5UPH7ZesBNTruzjTlr7Uu0ofNi39CIPqr6vyrRivMo0MoxSpsCIHpvD3iLlYfAe1bol7s85nSwwgfGspIljlb7Hqt%2B3EJqsfOTzteh1LKAyGPiXOHkONcYB5ioo74aUNiR3HvtuKRtLubfAYXBjRNHanqfwmt8m9XmX2CUEsN57sxALrwBlPegUb53r9AKdb3ff8XuY9DGhXZh3VXZJmbyH61Dw2lY%2F%2BNMiJOVaMm3WvTGrClE468WiCffbWfkGGhHyBT9TByEmcGj%2Bdknw2Q1r%2Bx39mEo7I4udXYMK7Rq8EGOqUB322dbBCpBJc6MrJU0W5WyHrzEznj8K4nDoE5DeOBJIqPw9bYN%2FX483hiZ%2Bjga6c%2BZqrAazfSw90SFqtomiqHL2WvB0c%2Flt2cyPTbvQ0%2BaUAnmhsKLV1nKB0WBq1HRYF0MhHM4uqpRGf3Vnl3fEPmqh74jae6wXN6WWITCRD8LIcequhogG%2B%2FZXkgcqmc%2FnDt6Wvwg8QGXfT3QOLCGg5JIdWqt76%2F&X-Amz-Signature=f4abe2e8544eba13fd61d6997c09dc7197db3da56cc3822c01233ac2873dea27&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPQ5QXH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK9qVOwLJhkeWBp0bc8Fqe8rI4%2FBiqSVDRYC5sU6KdLwIgJ8uez4ISY931PKYXwwACzGov8TSIzgjMufuz4EdHgmAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BvS6xDUMCXj8NQQircAw9QZGio8YRIzFPUt5T1%2FckPFn8xfSGowtLyrW0u3IBJp46edZ2rXz%2FxG1LxWUVcWWN0FCrMdWf3Ui%2FxPbxj%2BbB8XJxGAkLhAKRr06YMYQWO0V%2Bmi7JycB1uUm%2BqmviNQdUrfGbgGpszG5LOjNsFPv7%2F2B2Dyco3slm2E%2BEf1sTT9PQA218%2FSs8Xadx7i2ex%2BJv0qhhSwqFIaw%2B4s8cmbHXFO0DVGM7oEzFIbRuUPgHZT3PE09r5GZ6LGoP%2BR8k3U0kK96Eqq9Q%2BthXfgsmWqHB6Hg5AxRVyA3C%2FWc2zrO%2F97jyNR8%2FSVuUdocZ%2Bh6%2Fy09W%2F738pL3v7J4ceomDfAHD5UPH7ZesBNTruzjTlr7Uu0ofNi39CIPqr6vyrRivMo0MoxSpsCIHpvD3iLlYfAe1bol7s85nSwwgfGspIljlb7Hqt%2B3EJqsfOTzteh1LKAyGPiXOHkONcYB5ioo74aUNiR3HvtuKRtLubfAYXBjRNHanqfwmt8m9XmX2CUEsN57sxALrwBlPegUb53r9AKdb3ff8XuY9DGhXZh3VXZJmbyH61Dw2lY%2F%2BNMiJOVaMm3WvTGrClE468WiCffbWfkGGhHyBT9TByEmcGj%2Bdknw2Q1r%2Bx39mEo7I4udXYMK7Rq8EGOqUB322dbBCpBJc6MrJU0W5WyHrzEznj8K4nDoE5DeOBJIqPw9bYN%2FX483hiZ%2Bjga6c%2BZqrAazfSw90SFqtomiqHL2WvB0c%2Flt2cyPTbvQ0%2BaUAnmhsKLV1nKB0WBq1HRYF0MhHM4uqpRGf3Vnl3fEPmqh74jae6wXN6WWITCRD8LIcequhogG%2B%2FZXkgcqmc%2FnDt6Wvwg8QGXfT3QOLCGg5JIdWqt76%2F&X-Amz-Signature=14a8b670762230ab8897105fcc4250d8433ef7754602875bd0cc351476bb52d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
