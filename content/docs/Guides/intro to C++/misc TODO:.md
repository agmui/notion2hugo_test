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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGSZ7VD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICidR3ZQgmqPlz7TIJhSX86NU3zD%2BZ9LltP7F7fIqF1DAiEAsTQ0KSKMqReS9LnKXJmKCg26nU7EgIO7V9eokeQpOLEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd2gXzqvRMBg7EQkyrcA4YFfN%2Br5qpTYjgjXs4Ctxj0298e1KhUIxb7VeWmBkqN84s7eLCbJXZoRbs67ND2XE2TQJ1M4HNF%2FdADINYHIeMG8sjSWEmZ0Id6p9mC7OdZnzUUFn4mXgzrZw5qqmZDHyRynZSqUWOReuhYM9OZM7HTikl4CjYTSrV0fy%2F5dOI8ns1hp9xw%2FbMcO6%2BjBeOFbMkTQUgeOmpL%2Fxf6Qat%2BkRhDRAuGW6VuTPwlbw%2By8JyOJICXcJNT5%2FSm0RJHRcU10jxzC3bS7h0AftssHLgvqDOtx4YfVicFE0RT9ZH0jxyaXo12S1RuOe5wd%2FdKW5fw5Z9m5dLFn9VOpzotsPjX9KB2ozZr8uwLF%2FGzXwrhy%2BrvMQI1I8DzXFQMrYNdUhsjGFXaW94pT%2BUfXZJoPL90Ll0%2Fp%2FKZI9TzngQvhB9xUYOdz3wSHZfD5ndRUoa3wNtRnh54ts3aZYa9Tcorf53oMNdlwY3wpGhy%2FihkQ30evE%2FQQaLCeKIbuZ7g2IkUFp%2FyEgYJwQT93PqMGwLE6C1URquzqu0jHBU5Vx5HIZN8UkEj%2BrMPsQiqba0bW0HZKNwawu3TeBqaKTeAl29VwD70jCVdvkm4BwYvkhuuHKGBVsC3HAETgkA%2BCih6UAQ9MMOxhr4GOqUBr0QcxKZff7PvqExWrjioV85H0U3iGSwIdQ3K4k8O8eZZ1M0G%2FONYdXCqzh2MmhckdXm9zPIA%2B8eLWqrl215KJIP6B8%2FWGLK8LE21aQdHlu29sKro59MxeQPB4AxVa3XoR0KY5NCQK3fcEE2mQnmQ3FCcicjLYfw5pFjvpxEKyj8IAktIxDvwF3R6AsYKTJ%2FcJAeY3sM3DnNjjm7LxaqxJTG5CeJ6&X-Amz-Signature=c800667e0f277c0b3d2ab141789c42ea2c1094bbe1999f357faf52af60b8ae09&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGSZ7VD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICidR3ZQgmqPlz7TIJhSX86NU3zD%2BZ9LltP7F7fIqF1DAiEAsTQ0KSKMqReS9LnKXJmKCg26nU7EgIO7V9eokeQpOLEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd2gXzqvRMBg7EQkyrcA4YFfN%2Br5qpTYjgjXs4Ctxj0298e1KhUIxb7VeWmBkqN84s7eLCbJXZoRbs67ND2XE2TQJ1M4HNF%2FdADINYHIeMG8sjSWEmZ0Id6p9mC7OdZnzUUFn4mXgzrZw5qqmZDHyRynZSqUWOReuhYM9OZM7HTikl4CjYTSrV0fy%2F5dOI8ns1hp9xw%2FbMcO6%2BjBeOFbMkTQUgeOmpL%2Fxf6Qat%2BkRhDRAuGW6VuTPwlbw%2By8JyOJICXcJNT5%2FSm0RJHRcU10jxzC3bS7h0AftssHLgvqDOtx4YfVicFE0RT9ZH0jxyaXo12S1RuOe5wd%2FdKW5fw5Z9m5dLFn9VOpzotsPjX9KB2ozZr8uwLF%2FGzXwrhy%2BrvMQI1I8DzXFQMrYNdUhsjGFXaW94pT%2BUfXZJoPL90Ll0%2Fp%2FKZI9TzngQvhB9xUYOdz3wSHZfD5ndRUoa3wNtRnh54ts3aZYa9Tcorf53oMNdlwY3wpGhy%2FihkQ30evE%2FQQaLCeKIbuZ7g2IkUFp%2FyEgYJwQT93PqMGwLE6C1URquzqu0jHBU5Vx5HIZN8UkEj%2BrMPsQiqba0bW0HZKNwawu3TeBqaKTeAl29VwD70jCVdvkm4BwYvkhuuHKGBVsC3HAETgkA%2BCih6UAQ9MMOxhr4GOqUBr0QcxKZff7PvqExWrjioV85H0U3iGSwIdQ3K4k8O8eZZ1M0G%2FONYdXCqzh2MmhckdXm9zPIA%2B8eLWqrl215KJIP6B8%2FWGLK8LE21aQdHlu29sKro59MxeQPB4AxVa3XoR0KY5NCQK3fcEE2mQnmQ3FCcicjLYfw5pFjvpxEKyj8IAktIxDvwF3R6AsYKTJ%2FcJAeY3sM3DnNjjm7LxaqxJTG5CeJ6&X-Amz-Signature=2e26b7c9ae750933176836839dbb3a872fff890eeaf5c770b25f6333957f2a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
