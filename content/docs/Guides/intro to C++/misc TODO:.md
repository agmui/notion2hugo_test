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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XX6Z2XD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvmQOpiO0BAxFHa5OwNvaAufYaYlXRpsQLTDwZChrL1AiAmsejm%2BG3d48FQvkQH1vji%2F3XcFgtizGnjKY9DjaG41Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMhZ3M%2BuSQLe62ImyzKtwDxDkXKtwO7C9jqvxhrCjReDIh8T9IgJdhuDL42K1QhNWo9oeBqyWep3yuzfhCbM72YV6bZQ7UorLQvtlwz4m79RnaKg5ZVA1g%2BgMU6ADzGmh5ER%2BnoDUkzHUmHxIizhE9%2BnCZ6gCEd30pdZb5polKgk9TAiM77bgd%2BNP7FFNX1wswjwQmfiuyyIraXz4X09O3FG7y%2FLvp3zhKYReN6pVWGZBBDEkMgknmMg4%2BypVQBdCnHc2JR3s0qtfKuqqKVGnxggLs2NniI7JvyoGeVIthNevFeQV5WFmoqNTT%2FhNs5rzyq2F7hvax%2FOOu9c0nQCHzFtny9HJzsq6zTXj%2Byr3tEIYGcCEu0CywM85epVpFhdxVpkahsg%2FISguwjHpHkgLTZsnwPuEcAmwIB6ngmPi3a%2FhXJaSl%2BLV3CMszv9HvaqlSV1%2B1276Dil9u%2B00673fxoYtlTGopQB3bmt0q5QjuO0owkzJ%2B9qjz%2Fw%2BYAAi18Ow%2F5n8lfhebhKkIYheIyTncaKZRpnrqIb61N73ELQ8cGFOefq70UDqB3ppp%2Fp%2B2IjNgyA6H1%2Fm%2FNvKiJsGZHKVU8yGc73smSJ%2FzsH4pCauBZkqyQUGoB94PRJKQc4Z%2FwdF1e%2FWK%2BPEGSsBgq2QwqNTOvwY6pgFcEjMqQIU3PzSHJ3Mz7ctlYk6081M1JRD3VlcF4ZGPu%2FiiIy5YUUh2zrxIJpHhN%2BMaqXPfI%2BsT7OpMu48zN2eeZB5%2F63y41rbg7CwJg4NWBbRGacASRa8pGsDdi5tcl2xvabBmxjYADpGx35Dy79bBMw2Cgob4bxiWdvZ2YkJFszgtae8OEn52Px93vW5qyLR2%2FaPl4gUhJOEFdjebvVUuD%2F3DRKR2&X-Amz-Signature=581acef1af12edcc09305beaf2b417668137f980eb56c9035171244718a74b80&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XX6Z2XD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvmQOpiO0BAxFHa5OwNvaAufYaYlXRpsQLTDwZChrL1AiAmsejm%2BG3d48FQvkQH1vji%2F3XcFgtizGnjKY9DjaG41Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMhZ3M%2BuSQLe62ImyzKtwDxDkXKtwO7C9jqvxhrCjReDIh8T9IgJdhuDL42K1QhNWo9oeBqyWep3yuzfhCbM72YV6bZQ7UorLQvtlwz4m79RnaKg5ZVA1g%2BgMU6ADzGmh5ER%2BnoDUkzHUmHxIizhE9%2BnCZ6gCEd30pdZb5polKgk9TAiM77bgd%2BNP7FFNX1wswjwQmfiuyyIraXz4X09O3FG7y%2FLvp3zhKYReN6pVWGZBBDEkMgknmMg4%2BypVQBdCnHc2JR3s0qtfKuqqKVGnxggLs2NniI7JvyoGeVIthNevFeQV5WFmoqNTT%2FhNs5rzyq2F7hvax%2FOOu9c0nQCHzFtny9HJzsq6zTXj%2Byr3tEIYGcCEu0CywM85epVpFhdxVpkahsg%2FISguwjHpHkgLTZsnwPuEcAmwIB6ngmPi3a%2FhXJaSl%2BLV3CMszv9HvaqlSV1%2B1276Dil9u%2B00673fxoYtlTGopQB3bmt0q5QjuO0owkzJ%2B9qjz%2Fw%2BYAAi18Ow%2F5n8lfhebhKkIYheIyTncaKZRpnrqIb61N73ELQ8cGFOefq70UDqB3ppp%2Fp%2B2IjNgyA6H1%2Fm%2FNvKiJsGZHKVU8yGc73smSJ%2FzsH4pCauBZkqyQUGoB94PRJKQc4Z%2FwdF1e%2FWK%2BPEGSsBgq2QwqNTOvwY6pgFcEjMqQIU3PzSHJ3Mz7ctlYk6081M1JRD3VlcF4ZGPu%2FiiIy5YUUh2zrxIJpHhN%2BMaqXPfI%2BsT7OpMu48zN2eeZB5%2F63y41rbg7CwJg4NWBbRGacASRa8pGsDdi5tcl2xvabBmxjYADpGx35Dy79bBMw2Cgob4bxiWdvZ2YkJFszgtae8OEn52Px93vW5qyLR2%2FaPl4gUhJOEFdjebvVUuD%2F3DRKR2&X-Amz-Signature=559c98c2023d8e5764f1e8ade4c0a7f4bb1444d57fd98d56b99fb198473733fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
