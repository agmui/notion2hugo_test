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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNK6CPP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICm%2BJajUft%2BczRxUbiBqkWj901A0F9e5LrY1d8J2Mer%2BAiEA4sXzztExd%2Bmt%2Ba%2FXMb%2BhxLZpmBusms6wAb%2F%2BqnNFmdYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDePIuYCGKvG4Ehd6yrcA5wJrYzXbKGWvCbfDGeLDqATERWcxlUOfxOdKXtOnXZtSjwHfPqvKR547tguKQAHl5kO6big%2BNwbP0WHp6kTVEGZ3WWM9bhRg2O8Sb6BAcl5YSrmQDNcW0mo4EbiqnkgH4oDjSH8tDEgpznzcMr9Y02ig2f7EscmJTE6A28Vi9Frmn8cTxHQ8omUojw2QgeZ8QuFnAtG6u7BSd5h1sbIIxiIq9BYBohDikrPl3ix8k8f4NyvlwLv02dCFT5ZnQqQdyi5nRaNY6pdq93eIFIc9Sp02f8lwUBmBJ33R%2B7XNtWzW2OJd6XRFNge7v54ZqAKysHWaFx60jCqrof6zZAxpg2ZrES9gILe70NblsnTdATTovTmnKGiijLwse%2B0kxCiVorTQR8Uu0GDPlvB2J9jlYrkoDt62JUdIIx%2FueTa2%2Fnkyvx8Wuh9Xz2vYSkdEu5NwLg9dqHT00k7vepAFJ2ug4LRhc8haYp5wM9Vt%2B%2FmUueVpKEfSGq91eICfYWYlJ1PE%2BjzyVanaxQYDgQ6T%2B57k3Z097Q8A721%2F1pDByghy5%2FiOu%2BkojhlcXErWwIJX9ewO6MQXWj7j18cfkrefPfP1c1sgiY3y7Xt60zJMXzVI9VoumxxmUQzY%2Ffud0s%2BMPfXpr8GOqUBGSCI8HPGc%2F6%2B6Y12BUWAZxpLDDGfUS8YPg0%2B3zVvfntpil7UnU4cAVb4poUPgvGXD3bfCX%2FxsEpQEk8c26KZQZMHt5o%2FBujzZysspy28FsPeU19ON6ZVwUNAvtmhxeRaHGWQf7Gk0ibnkGs9V11rDURa7hsMiOWJiQxUPRKtzqxA4H0Xl9x0YswXxBkMYObfsb0m%2BJu25iaiaa77yH17iYhJQPni&X-Amz-Signature=956a1631219b3f974c8d94bb1cf283513d0609f4978972ad5f39a22fd297db9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNK6CPP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICm%2BJajUft%2BczRxUbiBqkWj901A0F9e5LrY1d8J2Mer%2BAiEA4sXzztExd%2Bmt%2Ba%2FXMb%2BhxLZpmBusms6wAb%2F%2BqnNFmdYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDePIuYCGKvG4Ehd6yrcA5wJrYzXbKGWvCbfDGeLDqATERWcxlUOfxOdKXtOnXZtSjwHfPqvKR547tguKQAHl5kO6big%2BNwbP0WHp6kTVEGZ3WWM9bhRg2O8Sb6BAcl5YSrmQDNcW0mo4EbiqnkgH4oDjSH8tDEgpznzcMr9Y02ig2f7EscmJTE6A28Vi9Frmn8cTxHQ8omUojw2QgeZ8QuFnAtG6u7BSd5h1sbIIxiIq9BYBohDikrPl3ix8k8f4NyvlwLv02dCFT5ZnQqQdyi5nRaNY6pdq93eIFIc9Sp02f8lwUBmBJ33R%2B7XNtWzW2OJd6XRFNge7v54ZqAKysHWaFx60jCqrof6zZAxpg2ZrES9gILe70NblsnTdATTovTmnKGiijLwse%2B0kxCiVorTQR8Uu0GDPlvB2J9jlYrkoDt62JUdIIx%2FueTa2%2Fnkyvx8Wuh9Xz2vYSkdEu5NwLg9dqHT00k7vepAFJ2ug4LRhc8haYp5wM9Vt%2B%2FmUueVpKEfSGq91eICfYWYlJ1PE%2BjzyVanaxQYDgQ6T%2B57k3Z097Q8A721%2F1pDByghy5%2FiOu%2BkojhlcXErWwIJX9ewO6MQXWj7j18cfkrefPfP1c1sgiY3y7Xt60zJMXzVI9VoumxxmUQzY%2Ffud0s%2BMPfXpr8GOqUBGSCI8HPGc%2F6%2B6Y12BUWAZxpLDDGfUS8YPg0%2B3zVvfntpil7UnU4cAVb4poUPgvGXD3bfCX%2FxsEpQEk8c26KZQZMHt5o%2FBujzZysspy28FsPeU19ON6ZVwUNAvtmhxeRaHGWQf7Gk0ibnkGs9V11rDURa7hsMiOWJiQxUPRKtzqxA4H0Xl9x0YswXxBkMYObfsb0m%2BJu25iaiaa77yH17iYhJQPni&X-Amz-Signature=eff6458b5dd504c6febe6716497882b0ef6192a1d396189b3f7005a58ced45bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
