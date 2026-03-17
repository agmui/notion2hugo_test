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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5N2AQC%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHXBeLa%2BO72yMSCuUdKDaZxXrMlkV5GauZtkqNcJvG7xAiBNhuzbiv3y9y%2F%2Fb7hXsxwQTuBmmetrEOLUmMo0V6I4aiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLi3iAjhBxz3%2Bvi%2BKtwDpGT5jE9AVPByJxW%2BJ0mB%2BFzE8ClW4sRoZRYpK4%2FoFG%2B4PW6GJLaWkx2SwfuRvtvP4G4VHgO1r%2F61%2FoR2zHbL%2BoCABDOW6366d4%2FUw%2Fu9GNYENwxrcADRVerdFQjTixty4G964Ttacr%2BJovxCAWsEp3Yj2z7L91%2FfNkOiyBdOX7QBHoN3KMFq9hPWbXtEJzp8iJF%2Fh2BGR8XMyf7kN0Gbnnxc52rv2Kv06XZR%2FdiRMdS%2FxU63sGBz139S%2FunmQzVhWx5czTzQURY5R%2FYZVtwcCl%2BL16%2FHjsLrAGDXEg6GodkRgCMYnQSjqlkM1Pjnkg1efym3BkfB%2ByQ%2FiWchug%2B756G%2B5XqP5cwqqDrnIn9M7RxvKfcF7oS5mOa5GUIwMmQo7lk%2FFFiNWvajASVtOjDSTF%2BQcr32z8PesDQpHqETPxd7tsxsiTzbwKW2xfbUarR01GwYvvMd81ZMrJxuPoB3lK6JVI7UWRMlcUeD2NIBZDAtXepGM2eWWkF2hQ958oKdaPJQLA%2BXoweu6%2F4gGX%2BvBzJI6qIxn2igDXoFXh%2FOoX%2BkTayOuIWe8CgD4DHpvMIDoy2wdIwi0xsd3CYqlSPs4TYuF1ZYJX%2FL3J5iaELN7QkqrUCvvMzx2cigrEww0OfizQY6pgEWd9KD1mG0QnbGoHA8kHF1GZEzS8JzV22yBB6%2BdLj1bK5qDtj9pN61ChN5fFOWCvYNR4fd6mjoXzPvupxS52iw2DoKxpxmuzehPBHU%2B3qKokalUsiHAXfXsAplkkYJ5%2FsbEvKatTu0B16ZWOGdApQg3drG7TbljOg9LKx7zS9%2F4YVYD9JlF7IZXrIW%2FPdKQp9uEQShL%2FnqH2OzHNQ4kJbl6W4oRy3I&X-Amz-Signature=a7c17198d1959b2cfac6ae539f22c6f70684f2a9f678265300991ce006e9332d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5N2AQC%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHXBeLa%2BO72yMSCuUdKDaZxXrMlkV5GauZtkqNcJvG7xAiBNhuzbiv3y9y%2F%2Fb7hXsxwQTuBmmetrEOLUmMo0V6I4aiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLi3iAjhBxz3%2Bvi%2BKtwDpGT5jE9AVPByJxW%2BJ0mB%2BFzE8ClW4sRoZRYpK4%2FoFG%2B4PW6GJLaWkx2SwfuRvtvP4G4VHgO1r%2F61%2FoR2zHbL%2BoCABDOW6366d4%2FUw%2Fu9GNYENwxrcADRVerdFQjTixty4G964Ttacr%2BJovxCAWsEp3Yj2z7L91%2FfNkOiyBdOX7QBHoN3KMFq9hPWbXtEJzp8iJF%2Fh2BGR8XMyf7kN0Gbnnxc52rv2Kv06XZR%2FdiRMdS%2FxU63sGBz139S%2FunmQzVhWx5czTzQURY5R%2FYZVtwcCl%2BL16%2FHjsLrAGDXEg6GodkRgCMYnQSjqlkM1Pjnkg1efym3BkfB%2ByQ%2FiWchug%2B756G%2B5XqP5cwqqDrnIn9M7RxvKfcF7oS5mOa5GUIwMmQo7lk%2FFFiNWvajASVtOjDSTF%2BQcr32z8PesDQpHqETPxd7tsxsiTzbwKW2xfbUarR01GwYvvMd81ZMrJxuPoB3lK6JVI7UWRMlcUeD2NIBZDAtXepGM2eWWkF2hQ958oKdaPJQLA%2BXoweu6%2F4gGX%2BvBzJI6qIxn2igDXoFXh%2FOoX%2BkTayOuIWe8CgD4DHpvMIDoy2wdIwi0xsd3CYqlSPs4TYuF1ZYJX%2FL3J5iaELN7QkqrUCvvMzx2cigrEww0OfizQY6pgEWd9KD1mG0QnbGoHA8kHF1GZEzS8JzV22yBB6%2BdLj1bK5qDtj9pN61ChN5fFOWCvYNR4fd6mjoXzPvupxS52iw2DoKxpxmuzehPBHU%2B3qKokalUsiHAXfXsAplkkYJ5%2FsbEvKatTu0B16ZWOGdApQg3drG7TbljOg9LKx7zS9%2F4YVYD9JlF7IZXrIW%2FPdKQp9uEQShL%2FnqH2OzHNQ4kJbl6W4oRy3I&X-Amz-Signature=56d02c048e37b749ea194ef6beeecd86677d8e2670aab7545e462a44d6bb11d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
