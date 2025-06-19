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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4JTGTA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC19JAhEEKhvzy5f6KHvj%2BcKAkJ65Xz6uAWi%2B8xH5h23gIgM6lOVGw07nf0LDUxp6J4tWB0dXD2sZcHcsD2pg3H08AqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELUo4i084BfzXJnoircA8Q4N7rQsl1J1GPW%2BPS5tTbHTrzzzkqECKKFVnKeD%2BYDj0gNvcX9yKXydhaaJP83enD8URy3D1C7vy7E4xFdPqjQoUlRuvPh%2BtQCnI94bJADkS5vpy9W6gPGBC8d5UempQoqrdwiXvEtq7owLcva718AgJUeJ0Sao6ewgV1iY6HF%2Byf2ua8sLkkgsYFKB8vYsK8iJc3tgclwuiGs0y3VOZf3NG%2FLJZ4en3mIzJof8z8N2X4%2BBKlf7giJqumupTfYmvXbQvPiV7zjCzROuBvJYDHuUBvWokP%2FJCNCHg9G4GX8xGC9dSey1n0LUPRWSIwP1alvMtGhm5Nkw5NvA%2FEOk2TiejxpSC4lj4pz31%2FxbhFnHVn58gugamZE8JjsdABYKtTlXopWW%2FOOMTauT2izaDc0hS7vEq9arWes4yAWjhv1%2BRSusbQaI%2BlAtnhaLn14nvF4L8Fi7Fb7H5c8GoxCQy9glxthkkBsKTgwrGAYXZRtmaYixZHloBwYNn8cnrl%2FSEFfi%2B7jJC4A4HrPWzQdf5IoRdRlVTjv6fSfMGNOj27PTejg0b%2BH%2FsUbIHm1KAIY3sB4b7KgpqMNFeVL4FTs096Db65w1Ed6FPHs6bnKjBlVMy7Y5tPYMtUR8wFpMKygzcIGOqUBKVV8A9RBQICmDt6zggBZCSlMmr4aLU7ZaqgVM2NSrKD3%2F0YjXo5BNj0Wwoku8dpiYnxJu6ES0ypXAocAK4lT4DR%2FBxeyT6k5ukHNrdopvbZpsqsZ6tcPHn%2BdF5Oycj3A5zK8cP3%2FDZTSObFe3YBc7S0H9jQ83%2BZLxVxXDAUli50KZwzFObppqW0mQn%2BZTdGYY%2BHcEFfwd7q6qABg8xvjdjdSSG47&X-Amz-Signature=0810e8e560bc7f155a83e8c4927cd329bcb4b19f0559d71400585ce2f1cbd776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4JTGTA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC19JAhEEKhvzy5f6KHvj%2BcKAkJ65Xz6uAWi%2B8xH5h23gIgM6lOVGw07nf0LDUxp6J4tWB0dXD2sZcHcsD2pg3H08AqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELUo4i084BfzXJnoircA8Q4N7rQsl1J1GPW%2BPS5tTbHTrzzzkqECKKFVnKeD%2BYDj0gNvcX9yKXydhaaJP83enD8URy3D1C7vy7E4xFdPqjQoUlRuvPh%2BtQCnI94bJADkS5vpy9W6gPGBC8d5UempQoqrdwiXvEtq7owLcva718AgJUeJ0Sao6ewgV1iY6HF%2Byf2ua8sLkkgsYFKB8vYsK8iJc3tgclwuiGs0y3VOZf3NG%2FLJZ4en3mIzJof8z8N2X4%2BBKlf7giJqumupTfYmvXbQvPiV7zjCzROuBvJYDHuUBvWokP%2FJCNCHg9G4GX8xGC9dSey1n0LUPRWSIwP1alvMtGhm5Nkw5NvA%2FEOk2TiejxpSC4lj4pz31%2FxbhFnHVn58gugamZE8JjsdABYKtTlXopWW%2FOOMTauT2izaDc0hS7vEq9arWes4yAWjhv1%2BRSusbQaI%2BlAtnhaLn14nvF4L8Fi7Fb7H5c8GoxCQy9glxthkkBsKTgwrGAYXZRtmaYixZHloBwYNn8cnrl%2FSEFfi%2B7jJC4A4HrPWzQdf5IoRdRlVTjv6fSfMGNOj27PTejg0b%2BH%2FsUbIHm1KAIY3sB4b7KgpqMNFeVL4FTs096Db65w1Ed6FPHs6bnKjBlVMy7Y5tPYMtUR8wFpMKygzcIGOqUBKVV8A9RBQICmDt6zggBZCSlMmr4aLU7ZaqgVM2NSrKD3%2F0YjXo5BNj0Wwoku8dpiYnxJu6ES0ypXAocAK4lT4DR%2FBxeyT6k5ukHNrdopvbZpsqsZ6tcPHn%2BdF5Oycj3A5zK8cP3%2FDZTSObFe3YBc7S0H9jQ83%2BZLxVxXDAUli50KZwzFObppqW0mQn%2BZTdGYY%2BHcEFfwd7q6qABg8xvjdjdSSG47&X-Amz-Signature=1740c8d7e5917e6e44ed34b55990ad56a75eca9c5fbcd02be5780aeebde383ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
