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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUAMMU6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzNF%2BSJGNEM7KIIlmJyRdStGJ4DrOR8cWPTfaiKuZcNAIhAO%2BtKy2FgMaf1O16PzSPwjwAartq%2BDWZZa3x%2B2bvfkckKv8DCBMQABoMNjM3NDIzMTgzODA1Igzq7AmaiklVvm%2FM%2Fzcq3AN637%2BuyvUsbGZdStmb2G5vpZqqbF1ARjbO%2ByF%2Bnr6n5enJ46RGmjsmVNkp1xsMTwyd2vjvDswDENV%2FPL9x6lz0P%2B8fFUIXQDqRum3d3BiAMy5QiRgiqnw%2BMMrJ1MOReEioZbaETSKUgNk5ygmgUxW4gbMdI3b8Qlh4sOJW9oynye3QI78ZzJf8RZarZsvv%2BYQTtDzXf9bG4xQoIS1XhQrV9jHeQ1mr3C3Hni%2FtY%2F6Y5UHF1XAt83%2FbTFjqgeBK6sJ60pyu3EL8qGkWARDsp1hEVCRvJgFD08pNbhNSr%2FDYdhY35MWU1K2LAgdo4VyQeqS66ikNATy0wLM%2BO6N4nNZZUm8DG5%2FptNSBhaOCWCiUjDbQ93bZXsVhg5OBO8WZn%2F030CqSPCC1hvASgMm%2FOxj1wZBFvymtQSQTBRF5Qf2Pvqw9LSphsoPupEahntgKZziuUTA%2B5M1o4ElmU9q4pNKMKIpQEH2AmjqQqUTgd8tJDMYUx9UpeoX%2BpDKDOq4%2FhYkXXOB1NEsA2EKYwkZOJgTAjopUys0GRaXVJGV%2Fb%2BoBD27eNm%2FANKDBPn%2BAtpen%2F7%2FUAR2FTRT3wHiKXTC4t5UghXcSkVUcZsQalY5EAeYKTh1GjbAbH35%2BgaRXGTCR5L6%2FBjqkAba3yUmLUMIqiwPv%2B5EeSF36%2FOx4Nfx9BY1O7hWJQQVTa2kdCyRN9%2Fg3wxy4qkgA57yk3ZJCCW0HWX%2BLFd7dqjmRWivhp7bAASW5d56NMhODdMNqRjSwP6lIXTv0HKE5t%2BPWt4%2Bl2wmt530GX5p9lPsCTqTJo0Oj%2FYINdwXHAYMe7TxZLiYAvVSsV%2B73WqK%2BOURN5V7klWhTXlbmMkWuenDIeAeV&X-Amz-Signature=43ede5d32a94245b020002f4085e5863d55e3b590b73555337a630a603cb7d02&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUAMMU6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzNF%2BSJGNEM7KIIlmJyRdStGJ4DrOR8cWPTfaiKuZcNAIhAO%2BtKy2FgMaf1O16PzSPwjwAartq%2BDWZZa3x%2B2bvfkckKv8DCBMQABoMNjM3NDIzMTgzODA1Igzq7AmaiklVvm%2FM%2Fzcq3AN637%2BuyvUsbGZdStmb2G5vpZqqbF1ARjbO%2ByF%2Bnr6n5enJ46RGmjsmVNkp1xsMTwyd2vjvDswDENV%2FPL9x6lz0P%2B8fFUIXQDqRum3d3BiAMy5QiRgiqnw%2BMMrJ1MOReEioZbaETSKUgNk5ygmgUxW4gbMdI3b8Qlh4sOJW9oynye3QI78ZzJf8RZarZsvv%2BYQTtDzXf9bG4xQoIS1XhQrV9jHeQ1mr3C3Hni%2FtY%2F6Y5UHF1XAt83%2FbTFjqgeBK6sJ60pyu3EL8qGkWARDsp1hEVCRvJgFD08pNbhNSr%2FDYdhY35MWU1K2LAgdo4VyQeqS66ikNATy0wLM%2BO6N4nNZZUm8DG5%2FptNSBhaOCWCiUjDbQ93bZXsVhg5OBO8WZn%2F030CqSPCC1hvASgMm%2FOxj1wZBFvymtQSQTBRF5Qf2Pvqw9LSphsoPupEahntgKZziuUTA%2B5M1o4ElmU9q4pNKMKIpQEH2AmjqQqUTgd8tJDMYUx9UpeoX%2BpDKDOq4%2FhYkXXOB1NEsA2EKYwkZOJgTAjopUys0GRaXVJGV%2Fb%2BoBD27eNm%2FANKDBPn%2BAtpen%2F7%2FUAR2FTRT3wHiKXTC4t5UghXcSkVUcZsQalY5EAeYKTh1GjbAbH35%2BgaRXGTCR5L6%2FBjqkAba3yUmLUMIqiwPv%2B5EeSF36%2FOx4Nfx9BY1O7hWJQQVTa2kdCyRN9%2Fg3wxy4qkgA57yk3ZJCCW0HWX%2BLFd7dqjmRWivhp7bAASW5d56NMhODdMNqRjSwP6lIXTv0HKE5t%2BPWt4%2Bl2wmt530GX5p9lPsCTqTJo0Oj%2FYINdwXHAYMe7TxZLiYAvVSsV%2B73WqK%2BOURN5V7klWhTXlbmMkWuenDIeAeV&X-Amz-Signature=58535d0febb978ee57a0ddd12970c177ab24928f2f56502eef10b437130bdbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
