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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663652JRBR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaeblxeLM39hlvgodDneAqaV3otNJuq1QDbX%2F3ROJJVAiABDnhYpK9oHr1ITBOXsfPo0fSoZQY3OncfWW2Hsfnx%2Byr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMZPwkKN2URLQRB4EoKtwDzNdjA1j5PYzUF00obPpa%2FmHa%2Bpw8Pnkd2qyFm24JkcOGOlxPLHP4o1mI43%2B1%2BxHBpQIZtkFp4BegAxEkk7G8i5K3rj%2BI3GcGaLR5ClPDpLzCJKufNWkv6AKpgQNn5TuE7EG3O2%2FwH94eoiJbcQ39s9irrWq9CYbKwmGPa51zqLbHac9Zgp861Vx1M6H7ZUNeOmnd6BNUUu4HuEsQKD%2Bbbz0G4Ao0krZDcjDXc2m0y5pRWV2nu6JEmb3Iojk3M4aIyiZdVAhtqyE787yypC06Pg4g%2BtHsPz3j1za%2BEwz%2FoCLYXCKGndDwYZlRUhXQBC4QRHIZKgwU%2FBQLHeFBP16PRowuPbopK8uloeQuk5nNEi%2B3VsY67EB9%2FwuISN128yMtrs3AXBK396X6zTPSDOwVNFBkgJppbBw7vgSAkRnxxvi1LQUzpoVJ7cxYc%2FooEOOiE%2FLomEz9zfeGzN4rB7H7go%2FrOsOxcFfuDB%2BAxGg5tJugJ%2BoB1NZv4CdonR%2F8dMoTL%2FN%2FT%2FZ4HMiJDBOgh11ikdSN4azpVZdFQBKY22yUTmN6id3Dfujrh8JzjWSjZQ72wwN1xSFPBn6texND2nzLnTN1CLdTUgsj6kx7DpxHD%2FlBmINGDb%2FkMJjTeD4w88mswAY6pgFEHkPw9j3nwPwNwcnOEpghCZHwAAkwPbebP41MIR0%2Fy4Emv7OpH9Nx5XWbBFAh1ISWxVVrOUx9MQgEHHmBCsoW9MytdC81POZhaQPrIQRul9hiAVLpEkBLHWiOIp59K12UtKdjc%2Fbp%2FI%2FBUEf7e4a6TpuHJimfI3t4M6NLhdhwoOipSNu6lhkmwKS1QRXYfGmewQgf4nbpKOTjMI9u1Kd9NU2k1Ks4&X-Amz-Signature=2e8628e068f92be84d3fe6a1ea818648a48697ca80e4a8ca2b2cd438b4b54822&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663652JRBR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaeblxeLM39hlvgodDneAqaV3otNJuq1QDbX%2F3ROJJVAiABDnhYpK9oHr1ITBOXsfPo0fSoZQY3OncfWW2Hsfnx%2Byr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMZPwkKN2URLQRB4EoKtwDzNdjA1j5PYzUF00obPpa%2FmHa%2Bpw8Pnkd2qyFm24JkcOGOlxPLHP4o1mI43%2B1%2BxHBpQIZtkFp4BegAxEkk7G8i5K3rj%2BI3GcGaLR5ClPDpLzCJKufNWkv6AKpgQNn5TuE7EG3O2%2FwH94eoiJbcQ39s9irrWq9CYbKwmGPa51zqLbHac9Zgp861Vx1M6H7ZUNeOmnd6BNUUu4HuEsQKD%2Bbbz0G4Ao0krZDcjDXc2m0y5pRWV2nu6JEmb3Iojk3M4aIyiZdVAhtqyE787yypC06Pg4g%2BtHsPz3j1za%2BEwz%2FoCLYXCKGndDwYZlRUhXQBC4QRHIZKgwU%2FBQLHeFBP16PRowuPbopK8uloeQuk5nNEi%2B3VsY67EB9%2FwuISN128yMtrs3AXBK396X6zTPSDOwVNFBkgJppbBw7vgSAkRnxxvi1LQUzpoVJ7cxYc%2FooEOOiE%2FLomEz9zfeGzN4rB7H7go%2FrOsOxcFfuDB%2BAxGg5tJugJ%2BoB1NZv4CdonR%2F8dMoTL%2FN%2FT%2FZ4HMiJDBOgh11ikdSN4azpVZdFQBKY22yUTmN6id3Dfujrh8JzjWSjZQ72wwN1xSFPBn6texND2nzLnTN1CLdTUgsj6kx7DpxHD%2FlBmINGDb%2FkMJjTeD4w88mswAY6pgFEHkPw9j3nwPwNwcnOEpghCZHwAAkwPbebP41MIR0%2Fy4Emv7OpH9Nx5XWbBFAh1ISWxVVrOUx9MQgEHHmBCsoW9MytdC81POZhaQPrIQRul9hiAVLpEkBLHWiOIp59K12UtKdjc%2Fbp%2FI%2FBUEf7e4a6TpuHJimfI3t4M6NLhdhwoOipSNu6lhkmwKS1QRXYfGmewQgf4nbpKOTjMI9u1Kd9NU2k1Ks4&X-Amz-Signature=b3f1b24d6217a2ad73374460a88477c3d37c005aec6896b26db8178d803219de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
