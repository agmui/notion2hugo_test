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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNWXYXMS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVzjE2rsQFjjgz6TCXA9qGW6PSnyQ6YNf1HV8WfvSQ2AiEAuyhcK8zmWSA12%2FGBdbYTUgB130sL9XwTR96BDWjYp6wqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMVit8kpUhDqyRJrSrcA4eqRo0x95Otg8SAdl0Z2QSBE%2B0I4%2BYfauDgnAURk9jUBXDIDj5O3XGjX%2B7ugs5f%2F%2BbFsy6%2F91yN0eBpK1tMK%2FAVQ4A%2BZtGrxBC4qtmtuWuUCL%2BrMSoClWzEcUDxpRcsJ1lhulgXp2Opz4mN6I8bOM06fNxaJhv%2FSCP8Kt6Vec2LCOTrvRPPLhQrxBe2A55HBzSQxSsupJ4bi94Vntv3QuYJ7w5%2BLDsgmMHQkZhWun3AQopfQNCb2nXqcuuttNSjkHYbIQqYbQU8vN%2BFH2Dd%2Bq5flE4Zk1%2B8h1TBe7QKEjJJNU3sMGd9LA52hffeQE8lFqlOZ0Y%2FXg66lbLJPDoIXXBGspubwwLaeIvaFPXIipYpp8TWuPZdmq7IZhdu6Qjw10G7rN89vzYoxGhtfv%2FP6i9zGIZiS9NolF1WGLWK6Vl%2BAfiYNqfED1jqV2LmDNaLaN6PEU0JXxO5d62u01Se4lKiGU5%2BKD4ChGr7BtzZsFA4wE8wXU8NX4pLnjdn3g0c0pP7VPxCLBUvLy5RF3f7vSE9wJdrukL%2FkEHmsJVkDKUloBiXAJeCTcMawgZn8LSPMKeVEAbHSFX6x4dXDQEdJYTVQCE44de0aw8g86tDEbtIzDSP5KE3sffPIEW%2BMIS6nb4GOqUB%2F6LRGKRXum5AFniAC4ySnaXtNAamjWW%2BWcDVuK256tAt21lhrfKbHfKQDa3CV9rX5W2SHaaNcDFIqvln7cth0rw7EFDy9Yz7f4gy79dRhLc8f7h1fznzrk0Fqsc%2BhGZX3wPWgH0WXlh6d8KNWmUmjZHAs1uqdmZC54cIHh8hK71BSpyFXRDW%2Bx%2BdKmGJ0b9EjW1L0hUD0mFJ0edfvQz19c8OTsTy&X-Amz-Signature=035ea36e6c2b8dcf89de613e6655eb8b6e9eb682260d220db340a78768f47378&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNWXYXMS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVzjE2rsQFjjgz6TCXA9qGW6PSnyQ6YNf1HV8WfvSQ2AiEAuyhcK8zmWSA12%2FGBdbYTUgB130sL9XwTR96BDWjYp6wqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMVit8kpUhDqyRJrSrcA4eqRo0x95Otg8SAdl0Z2QSBE%2B0I4%2BYfauDgnAURk9jUBXDIDj5O3XGjX%2B7ugs5f%2F%2BbFsy6%2F91yN0eBpK1tMK%2FAVQ4A%2BZtGrxBC4qtmtuWuUCL%2BrMSoClWzEcUDxpRcsJ1lhulgXp2Opz4mN6I8bOM06fNxaJhv%2FSCP8Kt6Vec2LCOTrvRPPLhQrxBe2A55HBzSQxSsupJ4bi94Vntv3QuYJ7w5%2BLDsgmMHQkZhWun3AQopfQNCb2nXqcuuttNSjkHYbIQqYbQU8vN%2BFH2Dd%2Bq5flE4Zk1%2B8h1TBe7QKEjJJNU3sMGd9LA52hffeQE8lFqlOZ0Y%2FXg66lbLJPDoIXXBGspubwwLaeIvaFPXIipYpp8TWuPZdmq7IZhdu6Qjw10G7rN89vzYoxGhtfv%2FP6i9zGIZiS9NolF1WGLWK6Vl%2BAfiYNqfED1jqV2LmDNaLaN6PEU0JXxO5d62u01Se4lKiGU5%2BKD4ChGr7BtzZsFA4wE8wXU8NX4pLnjdn3g0c0pP7VPxCLBUvLy5RF3f7vSE9wJdrukL%2FkEHmsJVkDKUloBiXAJeCTcMawgZn8LSPMKeVEAbHSFX6x4dXDQEdJYTVQCE44de0aw8g86tDEbtIzDSP5KE3sffPIEW%2BMIS6nb4GOqUB%2F6LRGKRXum5AFniAC4ySnaXtNAamjWW%2BWcDVuK256tAt21lhrfKbHfKQDa3CV9rX5W2SHaaNcDFIqvln7cth0rw7EFDy9Yz7f4gy79dRhLc8f7h1fznzrk0Fqsc%2BhGZX3wPWgH0WXlh6d8KNWmUmjZHAs1uqdmZC54cIHh8hK71BSpyFXRDW%2Bx%2BdKmGJ0b9EjW1L0hUD0mFJ0edfvQz19c8OTsTy&X-Amz-Signature=705bda867dd76c174050d78f32cda748519c1db867fc77fc01e70dd4b895f3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
