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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVOWZ5MX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMIXH2I2FsuVswcURDTnrwNMZASv6TnJ1clcr61F9JsAiAFFhALHLHbR1DUn7%2BY0LJJg5NvslBr0anOAj7qscGaOiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz13nmA42kjU%2FlMMBKtwDHyQ0xnfpS3eelS5FBiB8WFqolBgF0jzyzbiqyv8R5oUI6D1A0zsdeES9iKX%2BtYpdQjboY7RL%2FqWX73aI%2BqwQLsLWy%2FEpFsX7H%2FWDTPbzj21HLLV5e80nuV%2BF9ok5bG9OS5OWCidhiONg4dJIY0R9xpd4wVlDh0RZb%2B%2F9K3lmLeiZnWlNBiBeBCBj8RnhrItKI46rUW3sBF04s67bwR%2FTlWtkW%2FSEfO%2BfLEy5621XgQXT2Q9ZbOS4FdtXbUsFYP%2FxqP4bmT2osrWXWYkLlNzAHsF5N2duKM9INFBECMmZPN3lYdZx9dJM8qokIs638Za3PUQ7WcNXM7sM2es1EOcwqxBYpDhZ9OC%2FtVyM1Ai1%2BRAU9NASAQaOZ4ytTDGXtDgTkMVAr1X1J1DHuShasPjx4jCQ6xydLApD0s62TfDXIyKxMuI5lGUQZw%2FiiZr6Plt7AJOKGBYJPg6OoYAsA6CeQPtKAdOcjzk%2BRrTaxlO0e1Q9pXRrbBFNwmLJobfCKbteTe5wmWDmYWo2wfmrb2qGWo9ph0DDl0bklzRtm%2FNHZUOhJl1zuWwx1xY2jqkoTkKayFedDFZGs4lunElRIMU819kuVdJawMsPN4eg237yQYt4kwXvLEc2xdkE2Dsw6r6gvQY6pgHZqY%2B1Gl29ekQwZ7IGZVXW1dHjzNqKI7RyJ129KQ2%2FroGm4nXtPBUoBDFxSOKiGW514vYOa7EhCCgFPCNr0XneDakSGcucdlWJNgTCd4iNBvfeYn78O9zPYj%2Bn1ilPb19ZDXien%2FpZVTd1CBSnY9H0pU2tVJvtAxUnLSpkNFHOvyWyc4ASJsovDT7%2F6sKgfKd4AEuiScPmz7ij%2Bx8ihNJbi8QPBNlt&X-Amz-Signature=4dee29d1479f519a645b466696ff10902ecbc40cdf5868a41a7a69fec9ddb579&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVOWZ5MX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMIXH2I2FsuVswcURDTnrwNMZASv6TnJ1clcr61F9JsAiAFFhALHLHbR1DUn7%2BY0LJJg5NvslBr0anOAj7qscGaOiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz13nmA42kjU%2FlMMBKtwDHyQ0xnfpS3eelS5FBiB8WFqolBgF0jzyzbiqyv8R5oUI6D1A0zsdeES9iKX%2BtYpdQjboY7RL%2FqWX73aI%2BqwQLsLWy%2FEpFsX7H%2FWDTPbzj21HLLV5e80nuV%2BF9ok5bG9OS5OWCidhiONg4dJIY0R9xpd4wVlDh0RZb%2B%2F9K3lmLeiZnWlNBiBeBCBj8RnhrItKI46rUW3sBF04s67bwR%2FTlWtkW%2FSEfO%2BfLEy5621XgQXT2Q9ZbOS4FdtXbUsFYP%2FxqP4bmT2osrWXWYkLlNzAHsF5N2duKM9INFBECMmZPN3lYdZx9dJM8qokIs638Za3PUQ7WcNXM7sM2es1EOcwqxBYpDhZ9OC%2FtVyM1Ai1%2BRAU9NASAQaOZ4ytTDGXtDgTkMVAr1X1J1DHuShasPjx4jCQ6xydLApD0s62TfDXIyKxMuI5lGUQZw%2FiiZr6Plt7AJOKGBYJPg6OoYAsA6CeQPtKAdOcjzk%2BRrTaxlO0e1Q9pXRrbBFNwmLJobfCKbteTe5wmWDmYWo2wfmrb2qGWo9ph0DDl0bklzRtm%2FNHZUOhJl1zuWwx1xY2jqkoTkKayFedDFZGs4lunElRIMU819kuVdJawMsPN4eg237yQYt4kwXvLEc2xdkE2Dsw6r6gvQY6pgHZqY%2B1Gl29ekQwZ7IGZVXW1dHjzNqKI7RyJ129KQ2%2FroGm4nXtPBUoBDFxSOKiGW514vYOa7EhCCgFPCNr0XneDakSGcucdlWJNgTCd4iNBvfeYn78O9zPYj%2Bn1ilPb19ZDXien%2FpZVTd1CBSnY9H0pU2tVJvtAxUnLSpkNFHOvyWyc4ASJsovDT7%2F6sKgfKd4AEuiScPmz7ij%2Bx8ihNJbi8QPBNlt&X-Amz-Signature=c32b9fb87aa6f39d2520f6ce85137b9e5bf45f68d60739d8103f3d4615d4ce2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
