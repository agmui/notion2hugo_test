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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZCOZCHH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEUG9drKCfRD%2Fnt%2BOnQuFjH2jmpcc4W2qQJ3%2F%2F8dYFjdAiBH1e9x06Oz2fNhx%2FQmlJgqbs9dTtTA7nrRNOoRWSHFKSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvpch3nEi9Y4jmQZKtwDnf3ZBPcuAnj1MUN9oKkfK91tig%2FZAPMpiYZ%2BAp4qaTkVQO8QcnUwkXJYP6aQA0H5mgVOEyAT2ONJ%2FOn%2BPrr0V89VfNS%2FOeNX2CI8Yaj2gkdzc4C%2BefSTWrFMF6hbSmAZoKFQ1k08hh6KZeMXoBnvaWoF0qaBXyED6vIhf2GWGF6GYerkKCymJiU6agHDftZKnhkdiKnIzxS9upaEnsiICg5P5b5Ktdw11NmwllAHDUbT231iT7zAy6Y1FFbSLF2o%2FUTM7nDP3wIs4YR8NdbbXDo%2BQKpZ0opIbDYyp2OxqxyYAsz%2FPriMtcboiK3NoEmjPmaKLEEgX40dLKewoMO2j37HRbE7uf3MAOhX%2F2U4L%2BFoE6P81rsQLRfDH0KoetjRmvBgeRg%2FT95t1i0hRyTyG%2B6tsB4M%2FqYJ9g%2FOpEPSNr55DSVWEemvWAvOxBy4WcaTFdF166Q8VD%2Ble%2BI58ToU1tmxEjUpc%2BWIAfIggTDgwKhmZC4JuAF3Z%2BEux3DeSrMWskCPn30JYxQm1CF6kCFSfys63Uc%2BoZ9fdE%2F1Z3rEE543Mo%2BD%2BM%2BtdZd1lXGcShj05yFditrcvGvQWeTxZTXEpGC51C4NlOyo%2FqHVFjL30tt4KTSrIJNmfDw3%2BBowra%2BYwwY6pgEscmdxltGgU2lORU7%2FVIUjdxRraoENw5svEd%2FXUJVojQRM4J4G8aJW30LENOnG3g2D0hrI%2FXA6Nq6b5765HXfU8rsRDIHQRWD3HgOv%2ByYx4zPMwQNYTLpcSj39rPwa7bm1jEM3Hfv2t5kPPC9G8wvTkKHW6esj5tDiJWYKXpenMd%2F2pimIyVBV7cDNhdDRWsHD99%2BlNqQVEi4vus8Y77Y7%2F4hOtM9d&X-Amz-Signature=1f134be557e48a360af1c62bc980d4e4cc70f605da7b469bf1d0ca257624a191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZCOZCHH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEUG9drKCfRD%2Fnt%2BOnQuFjH2jmpcc4W2qQJ3%2F%2F8dYFjdAiBH1e9x06Oz2fNhx%2FQmlJgqbs9dTtTA7nrRNOoRWSHFKSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvpch3nEi9Y4jmQZKtwDnf3ZBPcuAnj1MUN9oKkfK91tig%2FZAPMpiYZ%2BAp4qaTkVQO8QcnUwkXJYP6aQA0H5mgVOEyAT2ONJ%2FOn%2BPrr0V89VfNS%2FOeNX2CI8Yaj2gkdzc4C%2BefSTWrFMF6hbSmAZoKFQ1k08hh6KZeMXoBnvaWoF0qaBXyED6vIhf2GWGF6GYerkKCymJiU6agHDftZKnhkdiKnIzxS9upaEnsiICg5P5b5Ktdw11NmwllAHDUbT231iT7zAy6Y1FFbSLF2o%2FUTM7nDP3wIs4YR8NdbbXDo%2BQKpZ0opIbDYyp2OxqxyYAsz%2FPriMtcboiK3NoEmjPmaKLEEgX40dLKewoMO2j37HRbE7uf3MAOhX%2F2U4L%2BFoE6P81rsQLRfDH0KoetjRmvBgeRg%2FT95t1i0hRyTyG%2B6tsB4M%2FqYJ9g%2FOpEPSNr55DSVWEemvWAvOxBy4WcaTFdF166Q8VD%2Ble%2BI58ToU1tmxEjUpc%2BWIAfIggTDgwKhmZC4JuAF3Z%2BEux3DeSrMWskCPn30JYxQm1CF6kCFSfys63Uc%2BoZ9fdE%2F1Z3rEE543Mo%2BD%2BM%2BtdZd1lXGcShj05yFditrcvGvQWeTxZTXEpGC51C4NlOyo%2FqHVFjL30tt4KTSrIJNmfDw3%2BBowra%2BYwwY6pgEscmdxltGgU2lORU7%2FVIUjdxRraoENw5svEd%2FXUJVojQRM4J4G8aJW30LENOnG3g2D0hrI%2FXA6Nq6b5765HXfU8rsRDIHQRWD3HgOv%2ByYx4zPMwQNYTLpcSj39rPwa7bm1jEM3Hfv2t5kPPC9G8wvTkKHW6esj5tDiJWYKXpenMd%2F2pimIyVBV7cDNhdDRWsHD99%2BlNqQVEi4vus8Y77Y7%2F4hOtM9d&X-Amz-Signature=e269bb2bd6b2c4688036c4bbf1be10629bb2bcfc96d204112349bf72b206432a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
