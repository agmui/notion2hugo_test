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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSI6NUT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDwEfbp7yd%2FfVhaBrUxnud2oQgqCDYQpdHz8Emr6SAB2AIgXxTA4ys9JD0mtWz7p5fqpcV%2FNA8HtFm6zCtDx%2FL8n6kqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx%2Fclx4VkgSOAnIgCrcA0KFLbR8kPEg6FuGjW8s9diLd4iiZ4f39nsofC4MraLWiEQJCvx6XDP4OIYOnhXTK4p4EDLkLileuDRmpq3n7iW3sI4jx6FQjHEpQJv%2BUOYV5t1vK6%2FyBFbPNHZjCtidgrgFd%2BN9H7sLThXyPdKEo6JOGg7y4Vrm%2FnTqIKecrai4IHP7U7ibw5yNCgBh1%2FH9F4T20goCA3PeXIAOOdP0iyIgzbuERGjsMz7tUAL4m%2BZzy6LSBZOgq0JcQk0SegtEPv0LWZzsCcYxJpG9IeAN5HDCWKpnpAg0kri7Vr5we5BSn0NO1MyTu3p3nnHkT29zySihkC5Q9RYSM8kNJerLeyD94smqJJ7uWkcTVhGdvPHI0Nx3hRLIZRqU2VEN0GwBR%2Fd5UOvUM8mrRIv02kwS3Xj6ELluBprd%2BN7xt79e8jCWK%2FnQEzDhU4fClHipVkrXIugIuOXzlDvHZS0SJ9ABDz2ullXMtym%2FpxTilgHC5kN3Infx3311WZ6h4eCQG1nQivYueKmZexfs3%2Fy51c%2BU0%2BQrmPVgsm8zKyzDsZFY6%2FGWjPy%2BXKtb8ib3vIYZqAjFOIZKfA4eRT4YV4AjYEsEUy3pXvM4nlZCh2YKEIYHTb5U0nQPzSij%2FzIO36GwMKuK778GOqUBNSZmqqmAtnowh0bASdIiZB%2B45xs1VPOGxoqj6Q7lKJADUmf2sSYyL9PhjH9jP0HbotR8EDDOApyfiXSeEXnNAFTa%2FcpiYN7pR8STn5m6yrUYOeFkmIK4orITtZizL7caAxjMzF%2BLzLG8ofX6VLYz8kFnM22uwndOYLfwe8rPO00tkeoiCzkL36e2vgKkXRB3FlveRlnEW7NgBBxljDtqldKdEp42&X-Amz-Signature=b372716bc5dada5fea802b91b63b371c13f8b0ffd7a370f250b74ebb6a3403a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSI6NUT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDwEfbp7yd%2FfVhaBrUxnud2oQgqCDYQpdHz8Emr6SAB2AIgXxTA4ys9JD0mtWz7p5fqpcV%2FNA8HtFm6zCtDx%2FL8n6kqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx%2Fclx4VkgSOAnIgCrcA0KFLbR8kPEg6FuGjW8s9diLd4iiZ4f39nsofC4MraLWiEQJCvx6XDP4OIYOnhXTK4p4EDLkLileuDRmpq3n7iW3sI4jx6FQjHEpQJv%2BUOYV5t1vK6%2FyBFbPNHZjCtidgrgFd%2BN9H7sLThXyPdKEo6JOGg7y4Vrm%2FnTqIKecrai4IHP7U7ibw5yNCgBh1%2FH9F4T20goCA3PeXIAOOdP0iyIgzbuERGjsMz7tUAL4m%2BZzy6LSBZOgq0JcQk0SegtEPv0LWZzsCcYxJpG9IeAN5HDCWKpnpAg0kri7Vr5we5BSn0NO1MyTu3p3nnHkT29zySihkC5Q9RYSM8kNJerLeyD94smqJJ7uWkcTVhGdvPHI0Nx3hRLIZRqU2VEN0GwBR%2Fd5UOvUM8mrRIv02kwS3Xj6ELluBprd%2BN7xt79e8jCWK%2FnQEzDhU4fClHipVkrXIugIuOXzlDvHZS0SJ9ABDz2ullXMtym%2FpxTilgHC5kN3Infx3311WZ6h4eCQG1nQivYueKmZexfs3%2Fy51c%2BU0%2BQrmPVgsm8zKyzDsZFY6%2FGWjPy%2BXKtb8ib3vIYZqAjFOIZKfA4eRT4YV4AjYEsEUy3pXvM4nlZCh2YKEIYHTb5U0nQPzSij%2FzIO36GwMKuK778GOqUBNSZmqqmAtnowh0bASdIiZB%2B45xs1VPOGxoqj6Q7lKJADUmf2sSYyL9PhjH9jP0HbotR8EDDOApyfiXSeEXnNAFTa%2FcpiYN7pR8STn5m6yrUYOeFkmIK4orITtZizL7caAxjMzF%2BLzLG8ofX6VLYz8kFnM22uwndOYLfwe8rPO00tkeoiCzkL36e2vgKkXRB3FlveRlnEW7NgBBxljDtqldKdEp42&X-Amz-Signature=515130c2a27b9221fa6f87ef77ec095aaab56a9764bd4b10bb96d2212c4fb3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
