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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44FE53Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCKN1PltbZe8Od%2Fbc8J%2FUCddTGiJzhQ8XGnup8d1VX5XQIgZuPGoILN84I10s9j1IbZz%2F3Bmj1AixQWx%2BC6zG0oiVgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4Ey86Do%2B55TcLokCrcA1o13gH7tarzATX7UEfqBuwGQGtdzkM7DWU6Ry3uDEX5mPfceqSWXAMf6vfTtofa26F4toPH%2BY1sADCoc7mWz95dO%2Bos0K2OFMRok19StHBdUNPpecXWp3COwfhJBzEKoiArneAZt0HwyXoCgRMl9uUFcQ%2FmQG14YqjkcTm8zWxuP2Hlt70uLefTqezZJiEgucsSPOcrvHS2AsMDmC8Ar9%2BB%2BZDiIRabLPpfxpTpbhtpd2XxZX60Ioc%2BzIK2nAkBBx6TWp8miTmORx7nKfcIjyBs6Pw0DAstm98b8ZQJ8kBv2vJ8VlFHq12CfOLsfDNttb8NOLoqVI1Iu8D3KeVq%2BZMZplIJNwnm1u2hcPb4%2Flxl79pzl8O2OY5S0Ec8KAcS1OHE5x1qk6cPox6jALhkT7cG9Tys3Suv894yJuee0HxXWZlupS0GCJUDs7HkahAGRpkSrNwrWzsLSYkxMi32oR1VEpSW930buwC9IVpls1NyFf33XLz%2BOTdreQ9AcCWvTOrmkxGCFY%2B%2BPSxcCPjMIvd8asiqjE1OsNDoqp26lGpOOlBDrV296t1WxugdXFciULCpxZQzy%2BZU8%2B8cqiLj%2FFEubrzoK%2BrELm%2BUsaRz%2BW2C8VM3eaTnjT2MqxVvMKKp0sAGOqUB%2Fr%2B%2B7TjEM3ibe4B3UgOAYCkOhukk%2FhabDvWRBmxayyjRZv0%2Fkj%2BuUER6y%2FZtxkEdpETe5postyZSkFIPu58Dbh3glZrgJFORyq7tGPOVsUi5zdIxkRHA2%2BxBgS2CkkdhalwriObdopA6oxMRpNc6i3%2BUiIxYFNp4ZTfnPc%2BpyEcsQXZTIP4uvDUsX2JceRKj4FyB1cTCLjQBqlP%2BlB35SnCLSSnk&X-Amz-Signature=5f4a4b4a1007ee9f2a92194b43a892d757cb688eea8424facd0c3fad787db5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44FE53Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCKN1PltbZe8Od%2Fbc8J%2FUCddTGiJzhQ8XGnup8d1VX5XQIgZuPGoILN84I10s9j1IbZz%2F3Bmj1AixQWx%2BC6zG0oiVgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4Ey86Do%2B55TcLokCrcA1o13gH7tarzATX7UEfqBuwGQGtdzkM7DWU6Ry3uDEX5mPfceqSWXAMf6vfTtofa26F4toPH%2BY1sADCoc7mWz95dO%2Bos0K2OFMRok19StHBdUNPpecXWp3COwfhJBzEKoiArneAZt0HwyXoCgRMl9uUFcQ%2FmQG14YqjkcTm8zWxuP2Hlt70uLefTqezZJiEgucsSPOcrvHS2AsMDmC8Ar9%2BB%2BZDiIRabLPpfxpTpbhtpd2XxZX60Ioc%2BzIK2nAkBBx6TWp8miTmORx7nKfcIjyBs6Pw0DAstm98b8ZQJ8kBv2vJ8VlFHq12CfOLsfDNttb8NOLoqVI1Iu8D3KeVq%2BZMZplIJNwnm1u2hcPb4%2Flxl79pzl8O2OY5S0Ec8KAcS1OHE5x1qk6cPox6jALhkT7cG9Tys3Suv894yJuee0HxXWZlupS0GCJUDs7HkahAGRpkSrNwrWzsLSYkxMi32oR1VEpSW930buwC9IVpls1NyFf33XLz%2BOTdreQ9AcCWvTOrmkxGCFY%2B%2BPSxcCPjMIvd8asiqjE1OsNDoqp26lGpOOlBDrV296t1WxugdXFciULCpxZQzy%2BZU8%2B8cqiLj%2FFEubrzoK%2BrELm%2BUsaRz%2BW2C8VM3eaTnjT2MqxVvMKKp0sAGOqUB%2Fr%2B%2B7TjEM3ibe4B3UgOAYCkOhukk%2FhabDvWRBmxayyjRZv0%2Fkj%2BuUER6y%2FZtxkEdpETe5postyZSkFIPu58Dbh3glZrgJFORyq7tGPOVsUi5zdIxkRHA2%2BxBgS2CkkdhalwriObdopA6oxMRpNc6i3%2BUiIxYFNp4ZTfnPc%2BpyEcsQXZTIP4uvDUsX2JceRKj4FyB1cTCLjQBqlP%2BlB35SnCLSSnk&X-Amz-Signature=29017c6c50035c6c3bd4b00a29a84914d11233853f053c923a55b508d2c4a9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
