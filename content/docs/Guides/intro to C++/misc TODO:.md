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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTC3UDYI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3obGwO16bx%2BSBRBcEtnaB7CGjaEhqsshED8frb2ELPAiAzBDeqY8%2BBVaJUyr0TUXKU6FHfNbT6xxoEg8m8Ea5tjSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMM%2BgGkBhp%2FvaxWXEvKtwDCe7egyC0Mlp4i06nfOST%2BxcR0BEprBVHTRcY39%2B0FEinsXmjraQ8muhyj4HEKqjXqaXMX28T3%2FdrHCxRMF2OJx35BnHrbeN01NUh%2Bz13jrn%2BAE3E%2BxHqz%2Fu61fH8mZgyN3cOUCoMWMUQgT1ZJW03AsK7lo0X0QQlus4RpUFgQ%2FIRQAjx0FuAh19V5%2FyzMliAMcQReF4%2F1LTD1YdpxoujNjiC04BeFKph57YhCtdP3%2BbIqAg9jFMtwoxDZxwdCvGBGaxgGIyQqNhvbobceyJwjoBIkFxOfyjDEhxpu2aDJv5LeGZgMyAcD1KLvj44Qg78wWpvMLgVJFYgJorS0zL2ROlINtiT9SSsr5NRoSLNvsnXSPv0F6RalQryqkvJ5kLKcbxDSt84wRRDKXZeRL4iDO2ZKAioZyZtDnJt0xovtWrFM5PYCTIcgdZoj68wYavHMuSVsBNLNpWTjIuMLu7DiemUk4TLby88BuxGn0AV7gUrSfsrmMqsSxbRDdbw1aAQZC%2FPikW34%2FAXKbNrEf1RERegccUWMMDFhFwTla%2BxdF88Q%2F65GcEoqLJ%2BZIXjWKdD1E0R4MlZhibYjLBm1Mjp7hctKO9w1jDf1d2N1TePLJuYZpVGCJUMOMje0NIwifjYwQY6pgEV2PfrMeGykWFqNfi34uJ7JM4jDDpuws42erVdRy1SoW08HmPE5%2FcG9hf7kDFxtc%2FdT%2Fnxo3qZg3b9SQyqCYw9Ypne54esM8oAaChp3lU708MqNH4asN8JAgaBZ929VvOrt7ZS%2BNQSE%2BmZbN7suH0p0243Gv09xDy20kQQqULBzGAzp30fM%2B948sVWZgtbxna2xWvHZTQLOmEIbQFMlRMKyvsxSsel&X-Amz-Signature=96d4dea73137cd6ee5aa9f104e36d44fa9dd49d0979fc2950bebb70cca8fbddd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTC3UDYI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3obGwO16bx%2BSBRBcEtnaB7CGjaEhqsshED8frb2ELPAiAzBDeqY8%2BBVaJUyr0TUXKU6FHfNbT6xxoEg8m8Ea5tjSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMM%2BgGkBhp%2FvaxWXEvKtwDCe7egyC0Mlp4i06nfOST%2BxcR0BEprBVHTRcY39%2B0FEinsXmjraQ8muhyj4HEKqjXqaXMX28T3%2FdrHCxRMF2OJx35BnHrbeN01NUh%2Bz13jrn%2BAE3E%2BxHqz%2Fu61fH8mZgyN3cOUCoMWMUQgT1ZJW03AsK7lo0X0QQlus4RpUFgQ%2FIRQAjx0FuAh19V5%2FyzMliAMcQReF4%2F1LTD1YdpxoujNjiC04BeFKph57YhCtdP3%2BbIqAg9jFMtwoxDZxwdCvGBGaxgGIyQqNhvbobceyJwjoBIkFxOfyjDEhxpu2aDJv5LeGZgMyAcD1KLvj44Qg78wWpvMLgVJFYgJorS0zL2ROlINtiT9SSsr5NRoSLNvsnXSPv0F6RalQryqkvJ5kLKcbxDSt84wRRDKXZeRL4iDO2ZKAioZyZtDnJt0xovtWrFM5PYCTIcgdZoj68wYavHMuSVsBNLNpWTjIuMLu7DiemUk4TLby88BuxGn0AV7gUrSfsrmMqsSxbRDdbw1aAQZC%2FPikW34%2FAXKbNrEf1RERegccUWMMDFhFwTla%2BxdF88Q%2F65GcEoqLJ%2BZIXjWKdD1E0R4MlZhibYjLBm1Mjp7hctKO9w1jDf1d2N1TePLJuYZpVGCJUMOMje0NIwifjYwQY6pgEV2PfrMeGykWFqNfi34uJ7JM4jDDpuws42erVdRy1SoW08HmPE5%2FcG9hf7kDFxtc%2FdT%2Fnxo3qZg3b9SQyqCYw9Ypne54esM8oAaChp3lU708MqNH4asN8JAgaBZ929VvOrt7ZS%2BNQSE%2BmZbN7suH0p0243Gv09xDy20kQQqULBzGAzp30fM%2B948sVWZgtbxna2xWvHZTQLOmEIbQFMlRMKyvsxSsel&X-Amz-Signature=97a8cdcb79855a6e910f5a46d864127a303545b8e3bf1ee542fdb9b0116dc083&X-Amz-SignedHeaders=host&x-id=GetObject)

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
