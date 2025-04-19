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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QR5GGV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBpZli7f8XXm4ey37dEJX4M7cPOf5TQj8uTaFyWjf%2FRJAiBed8Lq9BUs9H5M6rQ6l4NqhQGBYxxLV3q0SIELPB%2BphCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2FyjCEGmMi%2BK0gnKtwDdi1rAumPfpasyn0htasSoDudRx3XqBWpxmxquUNhC1PNPz8hrOXw8JjVjS1NpKmjgvEzbOEcrF1xPGrorQloTOHbiLjXd%2FDPxkKGY71wnD5ML%2BoQsp8vLUFUa2vTZyETCMOHyWklSJ8uXN%2BJZrfpzn3XYKGNZHfq2yl2xqPztIv5U6LSgxz4oIftGDcTnS82pRL1%2BWjNtcAHHKyFI3qUMWk2l5ZzaImIJ1kZzLSpwZ2j6I4W2TEu3DHYQzfDSENl6R%2FERVuhASQgCyPahcL653HpK7B0rQNHB7iPNkMNztZLg55bhl%2BVNy6wCC%2F5TaAVTFPZUwTH5oC233TOAR7GzZTahCIXT6nJcy0CYEhx%2FBcTq7Tj9SylhnugGrHBUee%2B%2F%2BOV9%2B1m4Knz49sTPToJp10MGuA%2Ff1tZAW2ISy0y7Vl6HvpG6OqykeqdfZh9AOS8XOHksTxFAMbrxYE3xfIg1MxRX6HFVBuARU0fe8aDTIf9T30pH6jnWSr8ZapSaMapDjY5mrJVf2yYAEitn8PTv9vFjbsMtUCjP57sja4AGk2UXc5lhyW2OC2GkKA35vNdlt%2Fr2QKSYJH%2FKZvBkNjta5abUA%2FweP2ZNh9NpHpYU3DtyDNwleqgOI5%2BnU8whaKOwAY6pgHNh6OO8VQJ%2B%2BLt8eJDBAhIlr8%2FM%2B5wXBeO46Zbif1jHgejQbYe7bJizXR%2BZ60KYugysmsJ3T6Z0JWem9KzwRXtTKQgO1JOuRh1khzISpEeaza5MdgHLthlWFVks94z6UU%2B%2BkQAe12C88nzdAMMT7RMMUSViTn0%2FiBxp271Vvrhb2qwS7Mp0sURmt36qNZLY12v6n88sP56b0318RSK1%2BHdbowvSJrz&X-Amz-Signature=ad75e183fa7e90fcbfad5258390b7a93e48e25468f5a05dfd40a70a29d7fc729&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QR5GGV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBpZli7f8XXm4ey37dEJX4M7cPOf5TQj8uTaFyWjf%2FRJAiBed8Lq9BUs9H5M6rQ6l4NqhQGBYxxLV3q0SIELPB%2BphCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2FyjCEGmMi%2BK0gnKtwDdi1rAumPfpasyn0htasSoDudRx3XqBWpxmxquUNhC1PNPz8hrOXw8JjVjS1NpKmjgvEzbOEcrF1xPGrorQloTOHbiLjXd%2FDPxkKGY71wnD5ML%2BoQsp8vLUFUa2vTZyETCMOHyWklSJ8uXN%2BJZrfpzn3XYKGNZHfq2yl2xqPztIv5U6LSgxz4oIftGDcTnS82pRL1%2BWjNtcAHHKyFI3qUMWk2l5ZzaImIJ1kZzLSpwZ2j6I4W2TEu3DHYQzfDSENl6R%2FERVuhASQgCyPahcL653HpK7B0rQNHB7iPNkMNztZLg55bhl%2BVNy6wCC%2F5TaAVTFPZUwTH5oC233TOAR7GzZTahCIXT6nJcy0CYEhx%2FBcTq7Tj9SylhnugGrHBUee%2B%2F%2BOV9%2B1m4Knz49sTPToJp10MGuA%2Ff1tZAW2ISy0y7Vl6HvpG6OqykeqdfZh9AOS8XOHksTxFAMbrxYE3xfIg1MxRX6HFVBuARU0fe8aDTIf9T30pH6jnWSr8ZapSaMapDjY5mrJVf2yYAEitn8PTv9vFjbsMtUCjP57sja4AGk2UXc5lhyW2OC2GkKA35vNdlt%2Fr2QKSYJH%2FKZvBkNjta5abUA%2FweP2ZNh9NpHpYU3DtyDNwleqgOI5%2BnU8whaKOwAY6pgHNh6OO8VQJ%2B%2BLt8eJDBAhIlr8%2FM%2B5wXBeO46Zbif1jHgejQbYe7bJizXR%2BZ60KYugysmsJ3T6Z0JWem9KzwRXtTKQgO1JOuRh1khzISpEeaza5MdgHLthlWFVks94z6UU%2B%2BkQAe12C88nzdAMMT7RMMUSViTn0%2FiBxp271Vvrhb2qwS7Mp0sURmt36qNZLY12v6n88sP56b0318RSK1%2BHdbowvSJrz&X-Amz-Signature=042c2cc8b5f30192e7df1a065abc5d4f47d99a3633e8f4cbc5bf64398103050b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
