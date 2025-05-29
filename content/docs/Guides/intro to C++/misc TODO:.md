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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMIREHW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxDuUHMA0vwyn7UxL3bq3okQdmKx72UiLC6P4depC%2BFAiA1zhpO00frQFPQSIev3xII03geGTscZ5WUQf3YiY25wyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWty77iEF35B1Pr%2FKtwDgPippKgibzWKnEUgpCFtt7AK1upURH7FGTzJmxt%2FH8o%2FAVy5oFCPbAlS6BE%2Bpu0mV%2FRwUCDwchSp3vp0zA%2FUULQy3TUN3lAyCxX0IEvuOexjyhoNagsYnZS0gfwzssBDfoelr543bkBCFpsOcLvC9TBRJQOKSjzGzZNOM4nzIfCaBN%2F7HEHcAjDr9ntcL1Qx2OlZ1XybekG1Hf1znxuD0tQQtmQnAFsbCtStJ%2FEgXDgXTI6LN78fnlEW7UVary1rImvRwuQmTQO%2BHiFfAiJ46jaLN%2Bg00mtnxrNP9N1zkEiBFmT6tr4l1zrou22N%2F68XaMONKVtTFmRGPDxLp26dPb1L8925kJeOHTMVlCoUYeUL4P4zsK7hrDnx3CixgBwWSkDKcY8DBoAsBH8F0V2SJh3RObmmJoDWSIEZXWyj0rllvo%2FMu7VNFreCBixbaJxoAEvmmPQLGcPUwl9vSqWC5zFbDsgoetWCb6b1KCCSAoy0kCJ7I8qKAL6pfmOo3aMGQdtdiDbqmZ9BYCFr3GsIzDlQi7PTLdirb%2FOCAqrftpl0kUkPqUDcANBobvvVBVXpxsT6s5n3Dkh9pXYfRK49%2B74aTsIA5YJBv4I8ritT%2Be9idjieh0EjZCtX%2B5kw4offwQY6pgEgWWhBk49yngWyH6M68xcFeQ7srMhec9hFbgDT6Wv11WmQBVCjboXotz%2FLHXT2QLyEEwL4ZJS6giQIskE1dqln7pEjY6VExoKsl4EAHsayWlXV4D%2B66gZGUw8PwN3i%2BrVRptiFoHyQweuzKKntKoJC88NHeVCZkeXdgyeztqlodZCAaVM796diID516oRzOGmEviXvW039EL49ooOXLI65OMYV4Gb5&X-Amz-Signature=fc8a17b77b4222a8a30420c3070e61c052f2df579637337cfee83cedd5051375&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMIREHW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxDuUHMA0vwyn7UxL3bq3okQdmKx72UiLC6P4depC%2BFAiA1zhpO00frQFPQSIev3xII03geGTscZ5WUQf3YiY25wyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWty77iEF35B1Pr%2FKtwDgPippKgibzWKnEUgpCFtt7AK1upURH7FGTzJmxt%2FH8o%2FAVy5oFCPbAlS6BE%2Bpu0mV%2FRwUCDwchSp3vp0zA%2FUULQy3TUN3lAyCxX0IEvuOexjyhoNagsYnZS0gfwzssBDfoelr543bkBCFpsOcLvC9TBRJQOKSjzGzZNOM4nzIfCaBN%2F7HEHcAjDr9ntcL1Qx2OlZ1XybekG1Hf1znxuD0tQQtmQnAFsbCtStJ%2FEgXDgXTI6LN78fnlEW7UVary1rImvRwuQmTQO%2BHiFfAiJ46jaLN%2Bg00mtnxrNP9N1zkEiBFmT6tr4l1zrou22N%2F68XaMONKVtTFmRGPDxLp26dPb1L8925kJeOHTMVlCoUYeUL4P4zsK7hrDnx3CixgBwWSkDKcY8DBoAsBH8F0V2SJh3RObmmJoDWSIEZXWyj0rllvo%2FMu7VNFreCBixbaJxoAEvmmPQLGcPUwl9vSqWC5zFbDsgoetWCb6b1KCCSAoy0kCJ7I8qKAL6pfmOo3aMGQdtdiDbqmZ9BYCFr3GsIzDlQi7PTLdirb%2FOCAqrftpl0kUkPqUDcANBobvvVBVXpxsT6s5n3Dkh9pXYfRK49%2B74aTsIA5YJBv4I8ritT%2Be9idjieh0EjZCtX%2B5kw4offwQY6pgEgWWhBk49yngWyH6M68xcFeQ7srMhec9hFbgDT6Wv11WmQBVCjboXotz%2FLHXT2QLyEEwL4ZJS6giQIskE1dqln7pEjY6VExoKsl4EAHsayWlXV4D%2B66gZGUw8PwN3i%2BrVRptiFoHyQweuzKKntKoJC88NHeVCZkeXdgyeztqlodZCAaVM796diID516oRzOGmEviXvW039EL49ooOXLI65OMYV4Gb5&X-Amz-Signature=4dc4e0736d30be62cea810ea4564eda7cb6299455a203823e0f91ba89c795fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
