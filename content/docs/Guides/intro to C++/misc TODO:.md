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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCESDXR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICMQPdcUZ69WPF6%2BBO1ymrCWRdNL1lkUdxyUN7apw3MBAiEAuIVzmWWbXHKDv794OqmnqdZekkAthHGtLjRpKg1rpBsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMKG%2FBgzk%2F3bfVFqmCrcA23g6CWm5N6VpVusVCke0EUtwlmnhL2yt0v%2FSv%2FAmUevZ%2BmJC9UKAthPGLLy3HoV8SMF%2BBbAV2%2F3Z3HbBlYW4bBIZWZtDvzmk0x8j636O6CjKTwFj%2Fb3DYhgys7OsCsCbOcGP%2FuCtojy5ceCFiY6zgIa6soP0q7rW%2BNK4FQFJzCRto97Pd4ofPtMIJRu%2BfUN7xTeXICKGsTUkVCjXYpUcAUJQG8OL0GUxqJv6gMs1FQ6G6KdBix6QPTqlCfM6NUTXrWvN3Z51bOQbWG7P1Yn%2BT8vTFfWavPQbnnz8eBKM2u5vcKwj0p4l28iShQX23vqQvnvCdBDfjlfKutczEyJ9mhixEdM9Pao0smChHxEgkz5eCHcR5erP2tz00cq1qnHto7WtWB5WBpALmuiUzo6gsFNQVUjK9xbrmLQ7auH5mOhkG%2FHrt6WiVJjE5FyXNlMzHyM02Zy3PKVB1ScWsrRh3vQ8IdTBxe4l%2F75WpEboJa0IC4gypwQc0%2FrLBLQKDTyJawccKC9byR7VivoaLXE0S319gIqCZWc0q%2BhyoRIDDcdxRM50SZfp5%2BEm9ffUDtgDE7Cld1qcV28T7Bq3ni3ORm3xKn0WKEtEykSjhoj%2BuzJcVyzIvj5PB6DfBBQMIngr74GOqUBEqu55QkGALVhyaY%2Ft1CzbDSu0u8fbG8o0ZpvFN2pnVr7v6fz8TXHErh6DEl5R98hnpBmwXmkNvus7tQVFAnuhDKbjs1etZY8wU3nHw7SGRIVb0uJsZtG2yFKwxt0qI5iTUNhZZHjEPtByJdcyw9E332preXs1%2BXJ7Qsts1LZSn1FZxZkNU5V5%2F0ss5pdTNWeGGR7aNfcmxjXfZfZaONiY%2BYpHuFz&X-Amz-Signature=4387da98ec789692e92996fb3e8a903d4b2a4bb44e8b9a8813ba673a77eafd3b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCESDXR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICMQPdcUZ69WPF6%2BBO1ymrCWRdNL1lkUdxyUN7apw3MBAiEAuIVzmWWbXHKDv794OqmnqdZekkAthHGtLjRpKg1rpBsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMKG%2FBgzk%2F3bfVFqmCrcA23g6CWm5N6VpVusVCke0EUtwlmnhL2yt0v%2FSv%2FAmUevZ%2BmJC9UKAthPGLLy3HoV8SMF%2BBbAV2%2F3Z3HbBlYW4bBIZWZtDvzmk0x8j636O6CjKTwFj%2Fb3DYhgys7OsCsCbOcGP%2FuCtojy5ceCFiY6zgIa6soP0q7rW%2BNK4FQFJzCRto97Pd4ofPtMIJRu%2BfUN7xTeXICKGsTUkVCjXYpUcAUJQG8OL0GUxqJv6gMs1FQ6G6KdBix6QPTqlCfM6NUTXrWvN3Z51bOQbWG7P1Yn%2BT8vTFfWavPQbnnz8eBKM2u5vcKwj0p4l28iShQX23vqQvnvCdBDfjlfKutczEyJ9mhixEdM9Pao0smChHxEgkz5eCHcR5erP2tz00cq1qnHto7WtWB5WBpALmuiUzo6gsFNQVUjK9xbrmLQ7auH5mOhkG%2FHrt6WiVJjE5FyXNlMzHyM02Zy3PKVB1ScWsrRh3vQ8IdTBxe4l%2F75WpEboJa0IC4gypwQc0%2FrLBLQKDTyJawccKC9byR7VivoaLXE0S319gIqCZWc0q%2BhyoRIDDcdxRM50SZfp5%2BEm9ffUDtgDE7Cld1qcV28T7Bq3ni3ORm3xKn0WKEtEykSjhoj%2BuzJcVyzIvj5PB6DfBBQMIngr74GOqUBEqu55QkGALVhyaY%2Ft1CzbDSu0u8fbG8o0ZpvFN2pnVr7v6fz8TXHErh6DEl5R98hnpBmwXmkNvus7tQVFAnuhDKbjs1etZY8wU3nHw7SGRIVb0uJsZtG2yFKwxt0qI5iTUNhZZHjEPtByJdcyw9E332preXs1%2BXJ7Qsts1LZSn1FZxZkNU5V5%2F0ss5pdTNWeGGR7aNfcmxjXfZfZaONiY%2BYpHuFz&X-Amz-Signature=db12eb04c2a54e44611fa088c2769a7f7edec9837bfd78bf6c35cae86f40473d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
