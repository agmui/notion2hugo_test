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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFBHT6F%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGI2KQgzIo3JYzEuyamvgT%2BabF9crbVeHYNeeVABiBzwIhAOdAnTmzvaL5yPqOMMfR6mMPL2LnV0AIeZn2rNXgAQj4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw29seopIdqBjTFtiUq3AMkfErwQ%2B8OwkibtSeCs5L5ZH78UPf8Uaiw%2B6E0NBKQf0LyAda5VxXMSEyazQmQrIre4l58%2FYpBSIUkNG1ZaGfN5KfMnd%2BWHx5z99UEyYon0HkRggczsqax6Ethy%2BZOboV%2B17H03y5FS8cOLahb7%2F9AEE6YPIu6GDATH01RtFlfCBw5bwOFe22DYHuS4nX51dvUl4yM36916%2BkmAzcH2JwQpuMFqpTD8DebPWikIVzgd2Ekhg%2FNr0VNQjLz%2BjWqA97bwzaJyb3%2BubDvwnla4E0VuHqoHBEsTga0K6MKzJ8imYhyrNg%2Bgloqm7x05er8gso0P6XVLqIwTX%2FMqZk34wQH0SCel3F62wbDDJB%2FXm7yAcdVf%2BnjjRm%2FaRWPukuEZ3CSP%2FlQPyrTa%2FDueoTxJz89iKU3YS6fK1ngSEhXxIODLQe5BtX5SSzg%2FKkB%2FnY71%2Fnod02xmKs8F3fN8pzpBsJ0n%2Bzd67LD2%2BEsMyxxHrDCYSlibHxqrtJcAYiIrrzoTaSO38aN4vhi5rtAhyRdLXTvCFHGZ9HqT0cR%2BEjie9LGo%2FXQ2qakWHLw%2BAsDFpEYtJTwHf6QDcfNEzwJ1diwNP7CFPEHrU%2FtG8ggk%2F2W6EQ7yIaEl0jiieGWJ3EinTCc%2FIzABjqkATfugRB%2Fp0DG5nxehloZM2sTa9NomGlVig8AJLAwUbhS5%2F7Q%2BOkivdru9ppr6kTnL4jSdB%2FgXTKOeT9FvugQCXPiHDEm0o6Y0vr4l%2B8IIW%2B0CLY336cDvYNe77TNgDxVTS2SBjZJmtj%2BT5p%2FKb2rastWHBnqpPcDg7kZ663iiVEpWW%2BReqeY5QNZof2CMKDeCYTMayiSbP6xvfswvfVJUB5KKRNN&X-Amz-Signature=0cb8575e068e2a72a9427ceefda71fc3555285abe2b22066c33050803949cc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFBHT6F%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGI2KQgzIo3JYzEuyamvgT%2BabF9crbVeHYNeeVABiBzwIhAOdAnTmzvaL5yPqOMMfR6mMPL2LnV0AIeZn2rNXgAQj4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw29seopIdqBjTFtiUq3AMkfErwQ%2B8OwkibtSeCs5L5ZH78UPf8Uaiw%2B6E0NBKQf0LyAda5VxXMSEyazQmQrIre4l58%2FYpBSIUkNG1ZaGfN5KfMnd%2BWHx5z99UEyYon0HkRggczsqax6Ethy%2BZOboV%2B17H03y5FS8cOLahb7%2F9AEE6YPIu6GDATH01RtFlfCBw5bwOFe22DYHuS4nX51dvUl4yM36916%2BkmAzcH2JwQpuMFqpTD8DebPWikIVzgd2Ekhg%2FNr0VNQjLz%2BjWqA97bwzaJyb3%2BubDvwnla4E0VuHqoHBEsTga0K6MKzJ8imYhyrNg%2Bgloqm7x05er8gso0P6XVLqIwTX%2FMqZk34wQH0SCel3F62wbDDJB%2FXm7yAcdVf%2BnjjRm%2FaRWPukuEZ3CSP%2FlQPyrTa%2FDueoTxJz89iKU3YS6fK1ngSEhXxIODLQe5BtX5SSzg%2FKkB%2FnY71%2Fnod02xmKs8F3fN8pzpBsJ0n%2Bzd67LD2%2BEsMyxxHrDCYSlibHxqrtJcAYiIrrzoTaSO38aN4vhi5rtAhyRdLXTvCFHGZ9HqT0cR%2BEjie9LGo%2FXQ2qakWHLw%2BAsDFpEYtJTwHf6QDcfNEzwJ1diwNP7CFPEHrU%2FtG8ggk%2F2W6EQ7yIaEl0jiieGWJ3EinTCc%2FIzABjqkATfugRB%2Fp0DG5nxehloZM2sTa9NomGlVig8AJLAwUbhS5%2F7Q%2BOkivdru9ppr6kTnL4jSdB%2FgXTKOeT9FvugQCXPiHDEm0o6Y0vr4l%2B8IIW%2B0CLY336cDvYNe77TNgDxVTS2SBjZJmtj%2BT5p%2FKb2rastWHBnqpPcDg7kZ663iiVEpWW%2BReqeY5QNZof2CMKDeCYTMayiSbP6xvfswvfVJUB5KKRNN&X-Amz-Signature=e7bd3469e3bdc2935208562626053d297aa116533fe5f471b849c52ee20c0385&X-Amz-SignedHeaders=host&x-id=GetObject)

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
