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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2H7A64%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC1OJP%2FzKURKxM9BzO0EMUaemvxHFJHyFkZUKmhCf5Q7wIgCb52M6%2BC06V7pesknubCo4k2gzaH6F5WTl7sfLBEOeoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ8poAF%2Fszo%2BVlQMCrcA3sLHcjTrBhD9hoe9C7vAaDsuWdQiepE1MXe9Uza17fTxSbIbD7KRxx8l4vH4Yh%2FEOrh07EeZSNb%2BPzguPGO3r%2BoHfVIDtFrCTx1Sku46wHSCIXGDRUVdQeQ71c2D1R3qwG5rsCADrC7FW%2BdnRYLHPpZa9%2BGMRIqPfLa6bTyCPJ2%2Bide6spav04XoL5XCTgukagPLp8Ogqq9QaeE19E%2BGnbQdxzxDyWrutpBVNa59Yr%2Bx23K6aYkQ94keiUq248n3B2FnC8EVQkHNB%2BnZUD3gdWGoIVaau5T7osRZLmo1v%2BxVYjmZv1OMKMub5vgVuCgX5yGOduLqEcinSl%2BuSE1xiUmx%2FcRzUoHEneGHNN4Xnicp%2BGpU%2FQU0Fxxi%2FFn9cRUdoc70PPmfj9cxQnIEgz4yHbzoZU1t8EI%2BL%2B46jCKswuk7Si0fYizGMl3IJgCnKewJhJUxIa1PFFspPqI%2F%2B0mhogRpkmAJq2ZBD0Ts1%2FWpXhUo3vSs8RVyHMQgUGvK8SYoL%2FxKyCCjhcU%2Fo5so9uKL2c5xq4hN8bVh3FrXEMGJW30ZA02ceTHS2VQ33pfzUqENm4%2BEhL6mi%2F%2Fpa0Vlz0sacehmzaKtJnlXI3pA24npWQ0UMl16JNlKmsvsA4JMOmq2cAGOqUBg3nej7kYpVaVA31B5C5Vw%2Bz2RneAS7MfC8l3RTuIAe8pMfhI%2BmZqAtVFciV8rJ8a80j%2B07n%2BYfWDGS6roekuPX%2BNJhmOx7QE20FKDBowev1TVqtV5Sj7vX0jEJxm0lAhkZK2sw8XqB%2BZfndCXVHe7U7UnMo40%2BkftaK336e9erSZpfyzXtabJZnWkJyQznqCQv55Wp6yLUXrDKekE5LSQHnpHFFj&X-Amz-Signature=07d9a1b6b71b3b0725acf5bac3a4280f0605c80af1b31d866d28c58ac54a9725&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2H7A64%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC1OJP%2FzKURKxM9BzO0EMUaemvxHFJHyFkZUKmhCf5Q7wIgCb52M6%2BC06V7pesknubCo4k2gzaH6F5WTl7sfLBEOeoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ8poAF%2Fszo%2BVlQMCrcA3sLHcjTrBhD9hoe9C7vAaDsuWdQiepE1MXe9Uza17fTxSbIbD7KRxx8l4vH4Yh%2FEOrh07EeZSNb%2BPzguPGO3r%2BoHfVIDtFrCTx1Sku46wHSCIXGDRUVdQeQ71c2D1R3qwG5rsCADrC7FW%2BdnRYLHPpZa9%2BGMRIqPfLa6bTyCPJ2%2Bide6spav04XoL5XCTgukagPLp8Ogqq9QaeE19E%2BGnbQdxzxDyWrutpBVNa59Yr%2Bx23K6aYkQ94keiUq248n3B2FnC8EVQkHNB%2BnZUD3gdWGoIVaau5T7osRZLmo1v%2BxVYjmZv1OMKMub5vgVuCgX5yGOduLqEcinSl%2BuSE1xiUmx%2FcRzUoHEneGHNN4Xnicp%2BGpU%2FQU0Fxxi%2FFn9cRUdoc70PPmfj9cxQnIEgz4yHbzoZU1t8EI%2BL%2B46jCKswuk7Si0fYizGMl3IJgCnKewJhJUxIa1PFFspPqI%2F%2B0mhogRpkmAJq2ZBD0Ts1%2FWpXhUo3vSs8RVyHMQgUGvK8SYoL%2FxKyCCjhcU%2Fo5so9uKL2c5xq4hN8bVh3FrXEMGJW30ZA02ceTHS2VQ33pfzUqENm4%2BEhL6mi%2F%2Fpa0Vlz0sacehmzaKtJnlXI3pA24npWQ0UMl16JNlKmsvsA4JMOmq2cAGOqUBg3nej7kYpVaVA31B5C5Vw%2Bz2RneAS7MfC8l3RTuIAe8pMfhI%2BmZqAtVFciV8rJ8a80j%2B07n%2BYfWDGS6roekuPX%2BNJhmOx7QE20FKDBowev1TVqtV5Sj7vX0jEJxm0lAhkZK2sw8XqB%2BZfndCXVHe7U7UnMo40%2BkftaK336e9erSZpfyzXtabJZnWkJyQznqCQv55Wp6yLUXrDKekE5LSQHnpHFFj&X-Amz-Signature=649d017821a2d3c98ace52906d2b39ccee8c72a2934ea76427051518d9777d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
