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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJTMFK7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPDUUibYWEkPNFVUva%2B5fHTqtlqCyyGTcoHYfYej50AIhAJI%2FC5W2ebaGWFI27GIrJwAs1tztoXvHWY4EOz8EViveKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPY9Cf3hC%2FPOw%2BxwAq3ANmeFK3jI7F%2FQ0AA9JXixcgTpCLtXB32EmyoUv%2By4ziA%2FdbB%2FIz4GZnAYIlxfbiGIvdFRVmk9PmGENMqMdbzz2i3Xyt6OB9dDnwXQnCic7yqN8lCQBK1AvRAT1fcB1jMiAxqZ9Mq%2BOQgjXXbMmPqf3jeGCKnp4Rd8FfJHBC14UtH%2FpUW1z0x%2F5LvZAEKL7ZSd6WP7Mr4X4Ph%2FNtxRYlhPMQi0cjOY6Uqkf7XL3cw4lK3xIlswERfdTtcHERCakKM7Wx6n1kJTnYNsvgbyIUxB2SQDr0n3T8s9saWA64Ve%2F7qVxKq%2F99nkP9wi2kgPKvGLvKWNAm%2BGmHAo1CdeEhAew7gsDCNT9XaYGmVwilHMrv5dgPBb3Sg9%2FjmpILNhcbpGkZyhc9eWEn72n4IIFhEkosbiIQD%2F8e3Wmtq76i%2BkeVLvEEeHRnykVdY72oK%2BXF3XnetTPE7ZcZphlLwmQHX8rkSzVmlbgaNnJYo0c5KvGwjMN5LC5NespGiiz%2F5xXKXIcMFaedbo10eNwrIDNVnEttprEFtZCac5LHSczT1WPTOjJRVrSIrwyviLFxMxhch1fN3hIE8bxFUxUzKpe8LBrU5CuHmpeR13kgdmA2xN5i1v1bRB%2FQL6Qhuwa0%2FjCmppO%2BBjqkAZ2PRmxz2ssHK2ZKJTl1JMyStJgOv3bCqJGRAJ%2FZwSsg9LFZWE%2FMPJsUwe4ntnArgYabiOX4BxN%2FJsQoSDNQ7jtyI6Xi3M1mJpr7S3r4tAKujas%2BJkzA0d1JxjdCAB%2BTROMY8CWEnq3JrsNzFcxipHUhAkkXS1EVgeLXmL64B6O%2Flnlgkdk%2Bcxy5AVFVcxFDtnuRGAAFJSSAVL3n6hEpKYgxd6vk&X-Amz-Signature=ba974e4f5929a7c5e16b3e3af81d2d482e283017a8c58577d2afc191b0c05795&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJTMFK7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPDUUibYWEkPNFVUva%2B5fHTqtlqCyyGTcoHYfYej50AIhAJI%2FC5W2ebaGWFI27GIrJwAs1tztoXvHWY4EOz8EViveKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPY9Cf3hC%2FPOw%2BxwAq3ANmeFK3jI7F%2FQ0AA9JXixcgTpCLtXB32EmyoUv%2By4ziA%2FdbB%2FIz4GZnAYIlxfbiGIvdFRVmk9PmGENMqMdbzz2i3Xyt6OB9dDnwXQnCic7yqN8lCQBK1AvRAT1fcB1jMiAxqZ9Mq%2BOQgjXXbMmPqf3jeGCKnp4Rd8FfJHBC14UtH%2FpUW1z0x%2F5LvZAEKL7ZSd6WP7Mr4X4Ph%2FNtxRYlhPMQi0cjOY6Uqkf7XL3cw4lK3xIlswERfdTtcHERCakKM7Wx6n1kJTnYNsvgbyIUxB2SQDr0n3T8s9saWA64Ve%2F7qVxKq%2F99nkP9wi2kgPKvGLvKWNAm%2BGmHAo1CdeEhAew7gsDCNT9XaYGmVwilHMrv5dgPBb3Sg9%2FjmpILNhcbpGkZyhc9eWEn72n4IIFhEkosbiIQD%2F8e3Wmtq76i%2BkeVLvEEeHRnykVdY72oK%2BXF3XnetTPE7ZcZphlLwmQHX8rkSzVmlbgaNnJYo0c5KvGwjMN5LC5NespGiiz%2F5xXKXIcMFaedbo10eNwrIDNVnEttprEFtZCac5LHSczT1WPTOjJRVrSIrwyviLFxMxhch1fN3hIE8bxFUxUzKpe8LBrU5CuHmpeR13kgdmA2xN5i1v1bRB%2FQL6Qhuwa0%2FjCmppO%2BBjqkAZ2PRmxz2ssHK2ZKJTl1JMyStJgOv3bCqJGRAJ%2FZwSsg9LFZWE%2FMPJsUwe4ntnArgYabiOX4BxN%2FJsQoSDNQ7jtyI6Xi3M1mJpr7S3r4tAKujas%2BJkzA0d1JxjdCAB%2BTROMY8CWEnq3JrsNzFcxipHUhAkkXS1EVgeLXmL64B6O%2Flnlgkdk%2Bcxy5AVFVcxFDtnuRGAAFJSSAVL3n6hEpKYgxd6vk&X-Amz-Signature=16abb5f1fa8e5822bd9ef545f6c77ffdfea22c5baf460bef642e1f9ddcda8ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
