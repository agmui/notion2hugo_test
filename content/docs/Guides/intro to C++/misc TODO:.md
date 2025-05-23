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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WOKPWJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICtXVf4v%2Bdn%2FJpvV858xz9%2FnEoAIo88CtlqMyLDGtQWpAiAVxD3VMFH1jCabtvYfX1AfJAaIbQUJuMEeQfArxZ1NbCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8Hrl9T7P1r8pJ6nKtwDj3q6%2BPUx4RW4IpGXXbERz10NKA65OQTNo7p9bxdPPwwRHRofnNrnEjlCp%2F6sGdDa2IdAm93jE%2BwkEXIqczJz2s21A%2FqV8ySvgBJgV4KDUPAlLgEHyZaa1uheekIFLbufRwblt%2F26%2BJSZUAQOdYGqYzyZTMGzVSRXMrvRJn%2Bc3HQmtvbpndsdiKBiQ0bLB%2Fzr9y%2BAbkgTIWZVTz5qpaWes6qvus48NQzk6JhJGpqU7kODKXEiBmiogPNpVornI1PlO4mGoLneH0fZXeHSIxTrGg2u7oOs8pfecjMr9uYh6iVJVg%2FWhJgWJRS4weJONXH1nBtVWoVk1k6HfWE2UYWIELQwnFm%2FwB%2FXHz9sOXMrsUKIrtbjYWaklLGVxveP8Jc2b9LCVfh3b6zpR24DQGRxIBRdUgpWtspTnMs11%2BJCOkMIHldS87KMRZn5spiUZGU4%2BYLX89LWUcDgRwdURUjWMSEzxyIhsc4lyKLvWokN7uwE9%2Bojw2dvWD%2F8gUkvmlXIvYUFBSIj8%2FtfG3oyzxKZsMOXTHCz0b%2B8qJY8s9ezg2wXBDi8WoSaR3WxGtEoowYBJ6ARHDBg7co4LDi210wB1Z2fDwiqf%2BaOBcZK%2BYV967pZ%2F6FYJ08HFdc4RvUwwfHBwQY6pgEd%2Fe%2Fpc3G10gnJeVkyQA8NdImAbxtPNelUW1qmVjD3yk8qCAVDU19MWXocXGQX9C1XETYKdYk9Cb%2BaHMIJs646e0sS%2BFQJxOyg05thC5oX41zP%2BdFFDMAcBGTzPdB91KyQ2IEFVlxT6LFqtBKMcX048Bd%2Bq7JlF0nv0bXTCwXqNWcS9R2%2F8%2FMbS8iNdYNRxizLTTPY222M8atzMFevriGzqE6FHkoQ&X-Amz-Signature=f5d6680e7f2c6ef037980080a1a062481e2d3aae800176e2c03d54a98c530485&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WOKPWJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICtXVf4v%2Bdn%2FJpvV858xz9%2FnEoAIo88CtlqMyLDGtQWpAiAVxD3VMFH1jCabtvYfX1AfJAaIbQUJuMEeQfArxZ1NbCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8Hrl9T7P1r8pJ6nKtwDj3q6%2BPUx4RW4IpGXXbERz10NKA65OQTNo7p9bxdPPwwRHRofnNrnEjlCp%2F6sGdDa2IdAm93jE%2BwkEXIqczJz2s21A%2FqV8ySvgBJgV4KDUPAlLgEHyZaa1uheekIFLbufRwblt%2F26%2BJSZUAQOdYGqYzyZTMGzVSRXMrvRJn%2Bc3HQmtvbpndsdiKBiQ0bLB%2Fzr9y%2BAbkgTIWZVTz5qpaWes6qvus48NQzk6JhJGpqU7kODKXEiBmiogPNpVornI1PlO4mGoLneH0fZXeHSIxTrGg2u7oOs8pfecjMr9uYh6iVJVg%2FWhJgWJRS4weJONXH1nBtVWoVk1k6HfWE2UYWIELQwnFm%2FwB%2FXHz9sOXMrsUKIrtbjYWaklLGVxveP8Jc2b9LCVfh3b6zpR24DQGRxIBRdUgpWtspTnMs11%2BJCOkMIHldS87KMRZn5spiUZGU4%2BYLX89LWUcDgRwdURUjWMSEzxyIhsc4lyKLvWokN7uwE9%2Bojw2dvWD%2F8gUkvmlXIvYUFBSIj8%2FtfG3oyzxKZsMOXTHCz0b%2B8qJY8s9ezg2wXBDi8WoSaR3WxGtEoowYBJ6ARHDBg7co4LDi210wB1Z2fDwiqf%2BaOBcZK%2BYV967pZ%2F6FYJ08HFdc4RvUwwfHBwQY6pgEd%2Fe%2Fpc3G10gnJeVkyQA8NdImAbxtPNelUW1qmVjD3yk8qCAVDU19MWXocXGQX9C1XETYKdYk9Cb%2BaHMIJs646e0sS%2BFQJxOyg05thC5oX41zP%2BdFFDMAcBGTzPdB91KyQ2IEFVlxT6LFqtBKMcX048Bd%2Bq7JlF0nv0bXTCwXqNWcS9R2%2F8%2FMbS8iNdYNRxizLTTPY222M8atzMFevriGzqE6FHkoQ&X-Amz-Signature=dbbce481403c5106746251beda35364941d39da95a842ff2f40f68e007324989&X-Amz-SignedHeaders=host&x-id=GetObject)

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
