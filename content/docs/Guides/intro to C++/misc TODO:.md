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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KGMPO3E%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDAnd772nnHVQsblA%2FeeyqKuTG0%2B28TNB25IebusJBtbAiEA2v7baVyYLRG4iTiZJ48ybSbJLJWBOdyUktNgtbZ2UmAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDE4S%2BnWdvrZZBJgHdyrcAzryCzLVzhQi%2FBlsSIqOuuwBY7Y%2FEu0PptN4xa6VQoNv4uq459%2BkPryKmKosNMNexUc8bI00YTWF2d2xp1rn%2F1jEz3YfHfhQjg9gd6tNM9cwfoI9NdqhNzmgdCwv%2Fs5imTlsATy5uSV5BRL%2B3IqcTbsUzUWvSmExVeAm67bnt1uYBO5FWvMtxERvT33gh2hROVA610ThTh0SeW9xrR3GiZC2o1sAHsTnX9JfHBCh5yZ6eXMSByR8n64KlNAbu6wAuRhhCOslWfQsqumoS7NuTkN%2Bn83tmw7mMc6kyQcNmk5GeuPi7jdCKwnDalJJZaqpbqZI8L7hAmeoAfjuZT5E0eSs9%2Bh5i%2FosOlH%2BRU9wp43PMyM5EBqrY0XgN9AXal%2For0%2FarztCMXwLG6hUerfxrRUUp%2FX5v3rdShUX1Uk11vcePCU%2F8WpPpEiuBO1LDgjibHoubKHo%2FH5uF%2FAPOWh9j1TLzSnMKrDvF8xd5mDYDtLdZ7NDDzh1HmK5bt0CXbawBqKUQF8uRIV6QItMXtplOXoi1ZShdXqaD2dNKPsa%2FSx1Us0ZuwFaAHZEwndYIXqfXwPyGTRI7oZj%2BYHThcxsZzSObLNa9bmBB6ONtpYvNFUmwGs6mBqvYLYbrqB9MK2Vtr4GOqUB39aCOYO%2Ft8LK7%2BO8qwMkbjsfcEkUGRm2c4QUjZ5AWI7QiH2P7u8WOrl%2FV%2Be6xqU2pty%2BtvroDl%2FHERUGRq3braivR9eGeAsTzjF3Y%2FiT0K12SR%2F92qUTKid4kMiNrXQ8%2FLxaJXg%2FWaEKMCviRxBzkG9yf3mhTzWZK1%2BUFyrSrzqHzwRvAyAZ4RxJZN57L2FN2Ne%2B1ylkec%2BPODNNEoGhbr%2BDYYiF&X-Amz-Signature=5f70c5749f0c292ce902fd51a468a5de7895ca6f0f6da1c23681214690f98e35&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KGMPO3E%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDAnd772nnHVQsblA%2FeeyqKuTG0%2B28TNB25IebusJBtbAiEA2v7baVyYLRG4iTiZJ48ybSbJLJWBOdyUktNgtbZ2UmAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDE4S%2BnWdvrZZBJgHdyrcAzryCzLVzhQi%2FBlsSIqOuuwBY7Y%2FEu0PptN4xa6VQoNv4uq459%2BkPryKmKosNMNexUc8bI00YTWF2d2xp1rn%2F1jEz3YfHfhQjg9gd6tNM9cwfoI9NdqhNzmgdCwv%2Fs5imTlsATy5uSV5BRL%2B3IqcTbsUzUWvSmExVeAm67bnt1uYBO5FWvMtxERvT33gh2hROVA610ThTh0SeW9xrR3GiZC2o1sAHsTnX9JfHBCh5yZ6eXMSByR8n64KlNAbu6wAuRhhCOslWfQsqumoS7NuTkN%2Bn83tmw7mMc6kyQcNmk5GeuPi7jdCKwnDalJJZaqpbqZI8L7hAmeoAfjuZT5E0eSs9%2Bh5i%2FosOlH%2BRU9wp43PMyM5EBqrY0XgN9AXal%2For0%2FarztCMXwLG6hUerfxrRUUp%2FX5v3rdShUX1Uk11vcePCU%2F8WpPpEiuBO1LDgjibHoubKHo%2FH5uF%2FAPOWh9j1TLzSnMKrDvF8xd5mDYDtLdZ7NDDzh1HmK5bt0CXbawBqKUQF8uRIV6QItMXtplOXoi1ZShdXqaD2dNKPsa%2FSx1Us0ZuwFaAHZEwndYIXqfXwPyGTRI7oZj%2BYHThcxsZzSObLNa9bmBB6ONtpYvNFUmwGs6mBqvYLYbrqB9MK2Vtr4GOqUB39aCOYO%2Ft8LK7%2BO8qwMkbjsfcEkUGRm2c4QUjZ5AWI7QiH2P7u8WOrl%2FV%2Be6xqU2pty%2BtvroDl%2FHERUGRq3braivR9eGeAsTzjF3Y%2FiT0K12SR%2F92qUTKid4kMiNrXQ8%2FLxaJXg%2FWaEKMCviRxBzkG9yf3mhTzWZK1%2BUFyrSrzqHzwRvAyAZ4RxJZN57L2FN2Ne%2B1ylkec%2BPODNNEoGhbr%2BDYYiF&X-Amz-Signature=39e1c7e4bd22243f7c6b0160fe99cf65702ae14da57ae00449d54779f1469c62&X-Amz-SignedHeaders=host&x-id=GetObject)

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
