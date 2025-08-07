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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGGCSIY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIG9KkVTYoMtgbCmy4s6ofosk9RYm24r%2BKrq6r4dEvWG0AiBblIw3kU1EwtNV02OiOFM4z74bWeUnwGv0Yswyv2jKFyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqAqxafkk2Z%2BL2xpKtwDZ9RLTl5qmhtDZRzCKrOszQc1VjyeBaNpdQ1XNMUTpebEmZgsIqSKV7CE0%2Bbk7k%2Fw5jCy1dCLTBpG%2FfuTimn6ZZFMYF3kTDmSBYp4R4T4rkyOhxOLWkL5%2F9W0DgGEZcwJ2GmNZUUHPdoVE2ufB47uW6t6fw%2BPXeam4YhPVj6fG8OBm78dsND%2BTMqonz3e2hqg%2FlgboNies13k7RZNBrb7xnchedClGDra3hyD8yfH9YacmQL4O1MbW0mWcnIc%2B0Bbh7wIfs0y6vyCBH8KbAVFPRjl00u%2FpO4615CimocOoVAIeCZKGjbaJTgAoqdaOOqZgFpylTHD%2FPt9b37z3Sk3MxQRTp0rigRBvpw8s84tz8neXSTIIgKTYbOqXBqfGFBtk9iGC3eX18mfBzuWL5PwKgxJxHdCJUZS2diGWDw%2FMQXhre8ZCAQ8X14qo4wvgBI5a7MS0gNgMo68JkF2wSAiwkvaFe4xyLIeyfYMIw%2BcPXvJQahDTJ8zQpn9j2bGUgaAeHZvD9LFLyTwRjEOhUMVIcZpVyeaIKtLhCqmryHEzX6209B7j9KZZxsu0OeY9hKmHFHVmr84vUVwboAgPr0nYjTxI9GWa3WuXjK1479pzsONDiCWkW8UXbAeE2ww0%2BzQxAY6pgFAyrNtihfZi0ci7CU4%2B7k7G4jni65upiw%2FsBo%2B6U2Sjv%2FaNhN1aXW%2Fo4sLozy0gEBwWhOJvMPpVNJdWE5L%2Fsmhqs3m6VKzE6yGOxsFHXZdeOV1TT9YWoSR0b6SbMlGco0uRFgpPNRyv1A1Kh5gBjCvgQdWd%2FFmIc4Ps3LkB93ZkXfUql6XXPonAISJPx8yKxjgHyl8i7bwozJ6FEgGmUMMmC%2ByUqfA&X-Amz-Signature=e42449442ad4077acdde0de3975541da7adb4a9768cf2745c254e4f65a9dec88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGGCSIY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIG9KkVTYoMtgbCmy4s6ofosk9RYm24r%2BKrq6r4dEvWG0AiBblIw3kU1EwtNV02OiOFM4z74bWeUnwGv0Yswyv2jKFyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqAqxafkk2Z%2BL2xpKtwDZ9RLTl5qmhtDZRzCKrOszQc1VjyeBaNpdQ1XNMUTpebEmZgsIqSKV7CE0%2Bbk7k%2Fw5jCy1dCLTBpG%2FfuTimn6ZZFMYF3kTDmSBYp4R4T4rkyOhxOLWkL5%2F9W0DgGEZcwJ2GmNZUUHPdoVE2ufB47uW6t6fw%2BPXeam4YhPVj6fG8OBm78dsND%2BTMqonz3e2hqg%2FlgboNies13k7RZNBrb7xnchedClGDra3hyD8yfH9YacmQL4O1MbW0mWcnIc%2B0Bbh7wIfs0y6vyCBH8KbAVFPRjl00u%2FpO4615CimocOoVAIeCZKGjbaJTgAoqdaOOqZgFpylTHD%2FPt9b37z3Sk3MxQRTp0rigRBvpw8s84tz8neXSTIIgKTYbOqXBqfGFBtk9iGC3eX18mfBzuWL5PwKgxJxHdCJUZS2diGWDw%2FMQXhre8ZCAQ8X14qo4wvgBI5a7MS0gNgMo68JkF2wSAiwkvaFe4xyLIeyfYMIw%2BcPXvJQahDTJ8zQpn9j2bGUgaAeHZvD9LFLyTwRjEOhUMVIcZpVyeaIKtLhCqmryHEzX6209B7j9KZZxsu0OeY9hKmHFHVmr84vUVwboAgPr0nYjTxI9GWa3WuXjK1479pzsONDiCWkW8UXbAeE2ww0%2BzQxAY6pgFAyrNtihfZi0ci7CU4%2B7k7G4jni65upiw%2FsBo%2B6U2Sjv%2FaNhN1aXW%2Fo4sLozy0gEBwWhOJvMPpVNJdWE5L%2Fsmhqs3m6VKzE6yGOxsFHXZdeOV1TT9YWoSR0b6SbMlGco0uRFgpPNRyv1A1Kh5gBjCvgQdWd%2FFmIc4Ps3LkB93ZkXfUql6XXPonAISJPx8yKxjgHyl8i7bwozJ6FEgGmUMMmC%2ByUqfA&X-Amz-Signature=d8ed82161e384a984d64a0a5dc12a4fb55a2b043981198ff5e58768d82cef4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
