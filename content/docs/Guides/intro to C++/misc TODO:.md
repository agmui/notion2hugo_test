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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMMJ3YD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDwfdPCjnSYwA3SIILrhcqM%2Fj5VlDHfQDukm%2BKiu84gxwIgXrye3B5GJlJ4kVOtv6W7HGAKmJcoIbYUr%2F%2BfOnhwiSYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACMXEopdyi9nCDnZircA4NbxumGeePl%2FqzFUmHwjTN22u%2FBrVZD%2FNRvOwWf%2FrZsmNTZkjYY8tQglVQyoccd4T4GBNqWKmbjOZ6fIvmRNsgA9opGRb8g8haNZHZKdNHgVCDFoELD1p6AyeSqjD4xBySK%2BpkbbAMsqTzqe%2BNGalIjHg7WFiHvIwCTajYLYSCZ18H50xNmK7TyZc4DwMQ5aXkaxhxngZAFZ%2B4yubCiyzWzZzlwhqeAv3kpYxAzmg7XlCZQhL3PKT1%2F0Ipt07awwjzuk4kZ2CBSnw%2FVouNRJCHNo7KpnbulPke0oQaXQGd%2BHLeeaBIuv4GW8API2WWtOJlZk7m0QMV%2FwyRg1M%2Fur2FodBg2aijuP9pI1MfiGNQoIKsBbwUM0o%2FSXvz6Z9Yyp2tz8m5aYpPQ4loH1h79QpiSgqrL6d0pSAQ2lb6sJa%2F%2FkH4VKJzfNa8Jf8y6boQaP8q5IWyPh94ulE7nOyALHfSy5ciwJE1TBpHC3vXwh5mZtIm9YjLvCfn5PCtb2I0XaCY3iJxp4n5%2FPlLwFchMMgBg1DX%2FXR%2BEtQ0L7YXVHWTMlIAKdnzZ4ZXvEDuWLYomd45xjDCaaoEAM2IedFN7WArrgPO7fxtzrSV7wNqFsnGIwjneNBUTAJWoBE39MKuJqsIGOqUBgyOsJaEjqHmRoEEDXAaf2icrC7o1INcP0yl7BBHp6dm30gr2SaKCnEhHujoELX9EFQ3Rs0iF7Pe6XDVqcdRQ1gWeTpn9q10Bt9q7aE59DZ4t9oBPPU0nQLuW1V%2BU0C8iSNqOAJ9dUrJMmG8Jn8i41K3FzbQWOBepDTL43uvqulPtX02eFqVGG%2F8VV1Zgv60du23rhhjQ1X62ooGM7hSuritFfxqO&X-Amz-Signature=7feadeaf032f894bd49c218829e74ad9caf8e013ae0503c5ebfe7c25fbaf0845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMMJ3YD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDwfdPCjnSYwA3SIILrhcqM%2Fj5VlDHfQDukm%2BKiu84gxwIgXrye3B5GJlJ4kVOtv6W7HGAKmJcoIbYUr%2F%2BfOnhwiSYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACMXEopdyi9nCDnZircA4NbxumGeePl%2FqzFUmHwjTN22u%2FBrVZD%2FNRvOwWf%2FrZsmNTZkjYY8tQglVQyoccd4T4GBNqWKmbjOZ6fIvmRNsgA9opGRb8g8haNZHZKdNHgVCDFoELD1p6AyeSqjD4xBySK%2BpkbbAMsqTzqe%2BNGalIjHg7WFiHvIwCTajYLYSCZ18H50xNmK7TyZc4DwMQ5aXkaxhxngZAFZ%2B4yubCiyzWzZzlwhqeAv3kpYxAzmg7XlCZQhL3PKT1%2F0Ipt07awwjzuk4kZ2CBSnw%2FVouNRJCHNo7KpnbulPke0oQaXQGd%2BHLeeaBIuv4GW8API2WWtOJlZk7m0QMV%2FwyRg1M%2Fur2FodBg2aijuP9pI1MfiGNQoIKsBbwUM0o%2FSXvz6Z9Yyp2tz8m5aYpPQ4loH1h79QpiSgqrL6d0pSAQ2lb6sJa%2F%2FkH4VKJzfNa8Jf8y6boQaP8q5IWyPh94ulE7nOyALHfSy5ciwJE1TBpHC3vXwh5mZtIm9YjLvCfn5PCtb2I0XaCY3iJxp4n5%2FPlLwFchMMgBg1DX%2FXR%2BEtQ0L7YXVHWTMlIAKdnzZ4ZXvEDuWLYomd45xjDCaaoEAM2IedFN7WArrgPO7fxtzrSV7wNqFsnGIwjneNBUTAJWoBE39MKuJqsIGOqUBgyOsJaEjqHmRoEEDXAaf2icrC7o1INcP0yl7BBHp6dm30gr2SaKCnEhHujoELX9EFQ3Rs0iF7Pe6XDVqcdRQ1gWeTpn9q10Bt9q7aE59DZ4t9oBPPU0nQLuW1V%2BU0C8iSNqOAJ9dUrJMmG8Jn8i41K3FzbQWOBepDTL43uvqulPtX02eFqVGG%2F8VV1Zgv60du23rhhjQ1X62ooGM7hSuritFfxqO&X-Amz-Signature=8120723474dcbfb3f3f43ecf365c598f40bd7e1d9f9778244bfda5f7456f6465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
