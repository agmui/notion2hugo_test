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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZEWJ7H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGYDxWP9LOn%2FAGC8xqWWuhnUeGFKUy%2F%2BJatAXOjRRSGeAiEApLEu%2BFEJGnO6UzhCt5d22GDDOTvXuchW53TO3pxIMu4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfEIzHerZnokJdrhSrcA2LlDIsMe8LltvF9Tqh2LbEQiM2J30IG2EFODURLp5SezPje1gNSeHI8ABb33WKbmSPSptgtg%2Ba9uKeclFu6zfzkRxfx8sMkyLYANWhX1eKBCihVQ9ehFu2NxQOzvdwDuR6cAnLK%2F%2BHi%2FXUa97ATtU8LKQqw%2FJuxEhSVHl6oKLl%2FgFn%2B1YX1cbaCX0gj3gOPocjEDdRNvXZyv3X%2FIyhXduqeterXoYlWpzj6CvnTOd5QxklS3tkt3i%2BJmG3VxrTExQTiIRNtb%2B8eCypIYtaJ2cROB5Fq4b6m4ZZe6v1xILZpjRk209r1HzDHPDrY0pFSjdwQ%2BibpFJTGapFLmClNWLZaUfR1vRAxgwlewat%2F0THelKbf1bbrUedyji6b%2BrJE60lTrgI56xEHRjSDoOMKVCbk%2BIKcnkrH9b26D9YUnilQ3CbP9OIM0%2BvBzCVWMTeYLVAzGKu1gZHtm2P83evU1e9t1XotCFCx0A987XbhQRy4nJcZNK0orvcEl0Ri10vhqTHk3a8Zi31RjyRLUVuLOFDYxy4jXP8FfE8f%2FGjTNDeIC6d7CnhOcdBPs9CJ76jW52QqGaej%2BEWOejlux6hBF2JUYV37FzQjH4TSRq4WQ2D3EBJdXOicCKqUkoGCMPqexr4GOqUBsDIrsrhhV%2BQAImgQBlHR0CVnD28nGWmBB1lNNN0htMR37Z2DeCZJa4c09oU9BZDFXke6ZSxJOyi2NcarYFFQksPCzsSjdNd%2FQ84Jzs1XaYWlgZSv%2BsLHZdPuTDvpNtbfSDO5uaN3SNjDr0L9P%2B2htyBdZoiMzqZxqKf1W4cyMEvJqtbj3DS3DLAr0bZd%2FSE0STra4AVi75q5tgy4qF46DS3AYmCD&X-Amz-Signature=9a9bba2b5b4fa91b0c971d63ff3729b22a9807e69c9a472f28a47165cfff093d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZEWJ7H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGYDxWP9LOn%2FAGC8xqWWuhnUeGFKUy%2F%2BJatAXOjRRSGeAiEApLEu%2BFEJGnO6UzhCt5d22GDDOTvXuchW53TO3pxIMu4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfEIzHerZnokJdrhSrcA2LlDIsMe8LltvF9Tqh2LbEQiM2J30IG2EFODURLp5SezPje1gNSeHI8ABb33WKbmSPSptgtg%2Ba9uKeclFu6zfzkRxfx8sMkyLYANWhX1eKBCihVQ9ehFu2NxQOzvdwDuR6cAnLK%2F%2BHi%2FXUa97ATtU8LKQqw%2FJuxEhSVHl6oKLl%2FgFn%2B1YX1cbaCX0gj3gOPocjEDdRNvXZyv3X%2FIyhXduqeterXoYlWpzj6CvnTOd5QxklS3tkt3i%2BJmG3VxrTExQTiIRNtb%2B8eCypIYtaJ2cROB5Fq4b6m4ZZe6v1xILZpjRk209r1HzDHPDrY0pFSjdwQ%2BibpFJTGapFLmClNWLZaUfR1vRAxgwlewat%2F0THelKbf1bbrUedyji6b%2BrJE60lTrgI56xEHRjSDoOMKVCbk%2BIKcnkrH9b26D9YUnilQ3CbP9OIM0%2BvBzCVWMTeYLVAzGKu1gZHtm2P83evU1e9t1XotCFCx0A987XbhQRy4nJcZNK0orvcEl0Ri10vhqTHk3a8Zi31RjyRLUVuLOFDYxy4jXP8FfE8f%2FGjTNDeIC6d7CnhOcdBPs9CJ76jW52QqGaej%2BEWOejlux6hBF2JUYV37FzQjH4TSRq4WQ2D3EBJdXOicCKqUkoGCMPqexr4GOqUBsDIrsrhhV%2BQAImgQBlHR0CVnD28nGWmBB1lNNN0htMR37Z2DeCZJa4c09oU9BZDFXke6ZSxJOyi2NcarYFFQksPCzsSjdNd%2FQ84Jzs1XaYWlgZSv%2BsLHZdPuTDvpNtbfSDO5uaN3SNjDr0L9P%2B2htyBdZoiMzqZxqKf1W4cyMEvJqtbj3DS3DLAr0bZd%2FSE0STra4AVi75q5tgy4qF46DS3AYmCD&X-Amz-Signature=24c7f10646d987ce2880450d80eef56276f2e6988dd0f0fe61f8106f9e1a3eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
