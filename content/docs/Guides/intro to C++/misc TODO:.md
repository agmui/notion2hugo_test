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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJTBMEU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCttKTGKRo8WVegpU0o2tTlrwhQdqqyemxzqO6lkFWALQIhAIB905EU8iW8OY5A3HuC%2BkvJ92TKbXBlQXgPiwX9u9RiKv8DCHEQABoMNjM3NDIzMTgzODA1IgwBtjMggVbGStBHxyQq3APi3aYhzUKT%2BnXzQPJBUIq%2FeiXSdYZ%2F77zYHeDMqq0aWc6BPxH1Bq5qUukuSkCb0MU1kzrsOWgE7ZuzA8jNv2H5hyJ%2Bi4q3LTKh7Q%2FNgtCv3UhT0yu5koh%2FHrFMoBPSPH5DtFb67%2Fz%2B0LdSpSv7LZGmN1mb4TUVqzHzoSm6aRo9baIXkv27CouC8j9i5fwbLJOFUV%2F3muyC335SSTlTtIJx4uMH7W5dGnwaRvdblqAw8hndelqi3mcCGxNODT2qVUU%2B9m9YRiobakWl%2FBLQTj%2FuaN2Pbt1LW6avfWnvgx12Otl177wigHyJff%2FECm0wQrZ6N9xzYGTNzDKmjstIlFOLNaoHdD%2FIZq%2FDQQktNr7N0Hi4jZVv8Cq3T9kvmQuoYa6AdJ9JSP5esHDekxyF8Y%2BgmTJTMDTIEbmQNTsMzKDfkOrzjxGdmxeUtqkTvbumgALwg1LoZ2sv%2BUQQG7H5zozA8Xk0ugpL%2BS%2BDhTj31k99RbiB3r5sOweM%2F0OaNkclpJfyRFEw6izKqb1E1izBIoL7nyNBZ8NRJvqywqgP7k7k5Yu8RO%2BL1Myf3V4RybQaSRDHU2xXIjEg2TawlipxP7A0mT%2BO8rz5d6sSsRxzScIbi0jwchPsMBLslNmkXTCh%2BIDFBjqkAavP7N1gzuMUYKWtUGqz6QKRUD0GXO%2BPZr9oWn3J4Dpc9oTerqNLVnnGboonUMjhJZZm2aJFXSsSJJ%2FIgv7HvtUHDtU43959FtMf0kv9%2F97mJGihWWzCh7pD1vdDxShXI0klYciR5p%2Bxi3mE0bbZXa0W6QVpw5IwIa8DpWzkjUx566kONU5VuTlEvyfl9SDV%2FmYMJlWrLRDQfm0SQOURzId3IJlT&X-Amz-Signature=7b72c8b0c4baa2b45266280e2b70ad892256de8b50d357868358e0cb0f33e5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJTBMEU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCttKTGKRo8WVegpU0o2tTlrwhQdqqyemxzqO6lkFWALQIhAIB905EU8iW8OY5A3HuC%2BkvJ92TKbXBlQXgPiwX9u9RiKv8DCHEQABoMNjM3NDIzMTgzODA1IgwBtjMggVbGStBHxyQq3APi3aYhzUKT%2BnXzQPJBUIq%2FeiXSdYZ%2F77zYHeDMqq0aWc6BPxH1Bq5qUukuSkCb0MU1kzrsOWgE7ZuzA8jNv2H5hyJ%2Bi4q3LTKh7Q%2FNgtCv3UhT0yu5koh%2FHrFMoBPSPH5DtFb67%2Fz%2B0LdSpSv7LZGmN1mb4TUVqzHzoSm6aRo9baIXkv27CouC8j9i5fwbLJOFUV%2F3muyC335SSTlTtIJx4uMH7W5dGnwaRvdblqAw8hndelqi3mcCGxNODT2qVUU%2B9m9YRiobakWl%2FBLQTj%2FuaN2Pbt1LW6avfWnvgx12Otl177wigHyJff%2FECm0wQrZ6N9xzYGTNzDKmjstIlFOLNaoHdD%2FIZq%2FDQQktNr7N0Hi4jZVv8Cq3T9kvmQuoYa6AdJ9JSP5esHDekxyF8Y%2BgmTJTMDTIEbmQNTsMzKDfkOrzjxGdmxeUtqkTvbumgALwg1LoZ2sv%2BUQQG7H5zozA8Xk0ugpL%2BS%2BDhTj31k99RbiB3r5sOweM%2F0OaNkclpJfyRFEw6izKqb1E1izBIoL7nyNBZ8NRJvqywqgP7k7k5Yu8RO%2BL1Myf3V4RybQaSRDHU2xXIjEg2TawlipxP7A0mT%2BO8rz5d6sSsRxzScIbi0jwchPsMBLslNmkXTCh%2BIDFBjqkAavP7N1gzuMUYKWtUGqz6QKRUD0GXO%2BPZr9oWn3J4Dpc9oTerqNLVnnGboonUMjhJZZm2aJFXSsSJJ%2FIgv7HvtUHDtU43959FtMf0kv9%2F97mJGihWWzCh7pD1vdDxShXI0klYciR5p%2Bxi3mE0bbZXa0W6QVpw5IwIa8DpWzkjUx566kONU5VuTlEvyfl9SDV%2FmYMJlWrLRDQfm0SQOURzId3IJlT&X-Amz-Signature=bd867cecb254e2756f7c42162e0a4adfa870df43b66b8397df8109825b4f8995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
