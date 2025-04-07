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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXGTFD7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1vNV0stV2Zm%2B3hwkosghRbPSMt8yMYShSHVPdpk%2FT0AiBZTrlByBrtaye0QBXaKjLSN72Vqc5M5FwLB%2Fy8Ql8%2FDSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM9que0yNrZ89k82tjKtwDgAJ5DgO%2BJu4En6ylY2CqzZNRYBFb5mdNrXE14NJJfR7Gt7DX0v4XQyW%2FzNN%2Ft%2BNHGaivv27HFXWmMeofcZIKi9EXirRn3g%2Fi5NjqYj4sWLwYwYhR5q8yMUJWn893sHwHBoSWm3EGL%2FDugRl5fHAhMQ0SiY%2B%2FxyZ0v3KjoUou%2FEKwWljCxMovxfVDfrJvqGgP2zHTJl94S%2Fp%2BDZRAp342lBdmG3gQSO8SQIDMlERw2rqcLDbJHctxmOdp8hn89i6BNbBGZl7rQipb%2FUeaLUSKRh2qPbgoof%2FjXQ9dNRLoYsBUxoI9%2BrGM058AeGe%2FMtf216qz8CwY%2BfPBGWsJ8hmOcx7APSe9kBo6kPrN7clJlnPZ0iuSk9iBKItWD5Si45wztyV6PU2Td%2Ft37eR7RIrcjPtO9m6inHvLDI7Ymf54G%2FI03ztffdKchNR6P6eQvqFtcrCNHhr5omLcl6ezHf8rhc0okKGrVxd15yi05IUMZmnBDO0kCSHCtkQCLnmXgooqE8de9swgQlFj6qU%2BLHvMLkuec65AdoUKf%2FnVG5kP6KkeZjz7riRuMviJolPMly6cxK6a2OZet57G10cEgYWC2IInsjXMsnQqCOiAkL1wT%2BFsE5AIeGGlFjHl3kowrIPNvwY6pgFPZ76WciPydS7TfO38BAYrKzeahsZJ3OEvkZ4sEAKzJ5pKit49wRKUOUJrUUtHzf29lruJSuKzNY30MKb3ihXvL7KGVn7BXWmx%2BQcx5e3q%2FURi068%2F3WMwDsmD1RhNdNyQUL%2BqzfnDzCGXFRVJlu1v6XzSmUueVVn97IdDhRcFC9uUZTUeXdPoHptH0ynsTiOMzhKidtDvxVeLy%2Bsnr8Mu%2BmnzpFxC&X-Amz-Signature=3ab544b3f7a44ad252fedb8dd42e958a7999118e398e792e58763b708b4422c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXGTFD7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1vNV0stV2Zm%2B3hwkosghRbPSMt8yMYShSHVPdpk%2FT0AiBZTrlByBrtaye0QBXaKjLSN72Vqc5M5FwLB%2Fy8Ql8%2FDSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM9que0yNrZ89k82tjKtwDgAJ5DgO%2BJu4En6ylY2CqzZNRYBFb5mdNrXE14NJJfR7Gt7DX0v4XQyW%2FzNN%2Ft%2BNHGaivv27HFXWmMeofcZIKi9EXirRn3g%2Fi5NjqYj4sWLwYwYhR5q8yMUJWn893sHwHBoSWm3EGL%2FDugRl5fHAhMQ0SiY%2B%2FxyZ0v3KjoUou%2FEKwWljCxMovxfVDfrJvqGgP2zHTJl94S%2Fp%2BDZRAp342lBdmG3gQSO8SQIDMlERw2rqcLDbJHctxmOdp8hn89i6BNbBGZl7rQipb%2FUeaLUSKRh2qPbgoof%2FjXQ9dNRLoYsBUxoI9%2BrGM058AeGe%2FMtf216qz8CwY%2BfPBGWsJ8hmOcx7APSe9kBo6kPrN7clJlnPZ0iuSk9iBKItWD5Si45wztyV6PU2Td%2Ft37eR7RIrcjPtO9m6inHvLDI7Ymf54G%2FI03ztffdKchNR6P6eQvqFtcrCNHhr5omLcl6ezHf8rhc0okKGrVxd15yi05IUMZmnBDO0kCSHCtkQCLnmXgooqE8de9swgQlFj6qU%2BLHvMLkuec65AdoUKf%2FnVG5kP6KkeZjz7riRuMviJolPMly6cxK6a2OZet57G10cEgYWC2IInsjXMsnQqCOiAkL1wT%2BFsE5AIeGGlFjHl3kowrIPNvwY6pgFPZ76WciPydS7TfO38BAYrKzeahsZJ3OEvkZ4sEAKzJ5pKit49wRKUOUJrUUtHzf29lruJSuKzNY30MKb3ihXvL7KGVn7BXWmx%2BQcx5e3q%2FURi068%2F3WMwDsmD1RhNdNyQUL%2BqzfnDzCGXFRVJlu1v6XzSmUueVVn97IdDhRcFC9uUZTUeXdPoHptH0ynsTiOMzhKidtDvxVeLy%2Bsnr8Mu%2BmnzpFxC&X-Amz-Signature=a00908fe1b31fefe54ebd00888fc5543fc85793d0d33955aacb4be3ce26c70f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
