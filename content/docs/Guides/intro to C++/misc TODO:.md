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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SQAKKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG%2BHmb7SNpo6oGGxCac8w51ZytcTZv5CKEIVpfCl4lNUAiAWjeLh5QSokrLbEX%2FEUSK7bTiKpubo3t6OWb42XSFVzSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQxJPsdBL0zOiUQ1DKtwD4bmy9PnUS01gjuIL%2BGa4BeYjA1DTlhs9mxl9oDDfLvDcVsF%2B2hammlTFj0TggIvKNg%2BJSYrfE8N1iXTwWcFBpFwt5%2B68Iy3VjyFK4eT9MJAyum%2FSRXR%2FIdOgJmImk6xFl5hvdqwiJgWp0ZfoT2hQQFLhVJoT1qeLAGYs6DcwjL9%2BRPBe2y9OLGVhz82ad4FVn4sdRtOmhtA88niOQOEH7sBz7d%2FjOP3W3d4t%2F1I5xO3zj0%2FVnNyB38kj0UyQed7knhvIjpPCQkyDSoiUEhljCurmenPfBhbloR7k%2Fogmmu7oyJo7K0Q9IuSFIqU%2FzEkY0FIF%2BtqpjpEcwW8xDd4oyt3SbxY%2Bfp7yS1WgrL9hWI5N8T7QyP0mkwQCcxvM66%2Ft7avIkBHhd5QrYzbKoGMIOpTfqRvcmXstsjRoXx%2FGmX0YuPlx5KQafUnViUQkepLeWzMwPKcl3HAyuSd2GEB3tgObon2VMof5M5uJzt9LDDkHz1MhZ3XYOCRGWa%2FYbQ3qxZKZCAqcgGJLERj%2BccUMM4k70gzP4g3vddN2TfmE0Z3%2BLLVbDwVLf0DG9GpPzXoH%2Bt3QlouQg%2B%2BjfBytgDLfX88fk0S9VwjrhnZS5vonTb0qX1gMKByXjpcRNewwpcKVxAY6pgFxHyh8LfBZGNsLUwL5CNSl4nUJh2Fzems00RHg5KQxjV9M7iKQf4vYb9IEF2pyiuWG%2BfdejN9PmgR5uCiM%2ByIrPKU%2Fa6GGs9c3YD6qINEP1VS4%2Ff2GKgCY89Z3TdY32S1kbl1pGTTYSH5SZCQpD16bJhG5v%2BsckzXiZ3K6sy5Cb9z5s9Fj85VOCCuMabv4YZWT5J35mqiIczbeLVDqziEnkajeqycg&X-Amz-Signature=7290c70906d2437a6a3c4d373ac3f355f95ddfadd130eae5e9584828dbbad292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SQAKKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIG%2BHmb7SNpo6oGGxCac8w51ZytcTZv5CKEIVpfCl4lNUAiAWjeLh5QSokrLbEX%2FEUSK7bTiKpubo3t6OWb42XSFVzSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQxJPsdBL0zOiUQ1DKtwD4bmy9PnUS01gjuIL%2BGa4BeYjA1DTlhs9mxl9oDDfLvDcVsF%2B2hammlTFj0TggIvKNg%2BJSYrfE8N1iXTwWcFBpFwt5%2B68Iy3VjyFK4eT9MJAyum%2FSRXR%2FIdOgJmImk6xFl5hvdqwiJgWp0ZfoT2hQQFLhVJoT1qeLAGYs6DcwjL9%2BRPBe2y9OLGVhz82ad4FVn4sdRtOmhtA88niOQOEH7sBz7d%2FjOP3W3d4t%2F1I5xO3zj0%2FVnNyB38kj0UyQed7knhvIjpPCQkyDSoiUEhljCurmenPfBhbloR7k%2Fogmmu7oyJo7K0Q9IuSFIqU%2FzEkY0FIF%2BtqpjpEcwW8xDd4oyt3SbxY%2Bfp7yS1WgrL9hWI5N8T7QyP0mkwQCcxvM66%2Ft7avIkBHhd5QrYzbKoGMIOpTfqRvcmXstsjRoXx%2FGmX0YuPlx5KQafUnViUQkepLeWzMwPKcl3HAyuSd2GEB3tgObon2VMof5M5uJzt9LDDkHz1MhZ3XYOCRGWa%2FYbQ3qxZKZCAqcgGJLERj%2BccUMM4k70gzP4g3vddN2TfmE0Z3%2BLLVbDwVLf0DG9GpPzXoH%2Bt3QlouQg%2B%2BjfBytgDLfX88fk0S9VwjrhnZS5vonTb0qX1gMKByXjpcRNewwpcKVxAY6pgFxHyh8LfBZGNsLUwL5CNSl4nUJh2Fzems00RHg5KQxjV9M7iKQf4vYb9IEF2pyiuWG%2BfdejN9PmgR5uCiM%2ByIrPKU%2Fa6GGs9c3YD6qINEP1VS4%2Ff2GKgCY89Z3TdY32S1kbl1pGTTYSH5SZCQpD16bJhG5v%2BsckzXiZ3K6sy5Cb9z5s9Fj85VOCCuMabv4YZWT5J35mqiIczbeLVDqziEnkajeqycg&X-Amz-Signature=b2f4243ed48d712ef8ee29acdbad39b8caf9285950e583b28bf1842aebc3f9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
