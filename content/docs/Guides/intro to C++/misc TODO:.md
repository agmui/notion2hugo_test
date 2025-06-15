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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCURW5J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAlT%2BEwsMVGo40gtPM%2BHme3LrSR3Fc8MavEVMnMD0EpiAiEA9xloR3Ff96V7LY%2BHIY8oJpU8QLn%2BPRNkNqmhIVRPyRoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNuuxbYqZwY3T2dBzCrcA83k8K%2Fpe60UHKaKFRPMaSILPRehogCXADRnKqqJn9mb0PLW1J05ei2yct4DEp6dNG4eeEBgU6HAzA92DEnMhzYSwCNXIAwOzM2Y2MRASFmMOvriQueo%2FDLtY4r%2B5AhwKr5DjiamtBnnVA3ywyEDNuxS3LIKWMd4OnYatvJza5oiiCGyfOBTWX%2Bfsk2OqgvadNOKQHecwut3bs4PvvGDgAYW5EtWJoArKuVj1zTodWDwnsM8gRUvsEVMSMYYU%2BWICq6HNCBjnjIPZoL%2FgVWk3cjCOIZxlrJwcr2KHldmQGmV5jqwZBJ76ARjymTvmYA58AoPn7hZQT8tFZ3y3nDEBwNG%2FvUpPzkoXx6Lx%2BmsCq94WQPJJrbEeZyq10HwBtshbs62E8aWArG%2FOsA%2BRlz%2F9r5l%2BmOsQsDFzoKkbbZadGbzRUqsE4WpUq37oEQlxsm7z4Q%2BllPQmAkv2LdIb4TNqBQGY8ZXYXPttXT5z%2FRKxn3KUdISYGC6slgSowVcDZs9KGrbzdFtdoSL4%2B31NKENW0HJ6UayE%2FjRMcsNLyDgGcJmoFri3Wa%2Ft7WyiFkJE2d%2BnximWkl7p%2BmgkxDflVCwYaS1ErjLJrCa7DoSYHw0Sf%2FhJ%2BTMzEg7mGAZ5dEwMJ%2BFusIGOqUBHeAPBqGGzEHAFaK0Odf7%2BZTuJLzEFYLnt%2F%2B1kBnVqVsM4AX%2BC5Ce6iDyW35d3bALlQphoFC7lcQa66EI2UMC7%2BSfnTmsV0TId0SEGTMRFdzH8fWyIBtUW5d1Xdwn3zgOjWZIQvOVyg6jWq3LZfA0xWiz%2BuZu8IAsbR1%2FoWkxp%2Bb32y1E2nye2rIuxj1JQEkHL5oZ181MZQ1ZTNddtrzDK6vF6vdd&X-Amz-Signature=af77f280d48be8b75fe750d8de0ecf8a7146298fc6b1615d993324b8ddc0799d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCURW5J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAlT%2BEwsMVGo40gtPM%2BHme3LrSR3Fc8MavEVMnMD0EpiAiEA9xloR3Ff96V7LY%2BHIY8oJpU8QLn%2BPRNkNqmhIVRPyRoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNuuxbYqZwY3T2dBzCrcA83k8K%2Fpe60UHKaKFRPMaSILPRehogCXADRnKqqJn9mb0PLW1J05ei2yct4DEp6dNG4eeEBgU6HAzA92DEnMhzYSwCNXIAwOzM2Y2MRASFmMOvriQueo%2FDLtY4r%2B5AhwKr5DjiamtBnnVA3ywyEDNuxS3LIKWMd4OnYatvJza5oiiCGyfOBTWX%2Bfsk2OqgvadNOKQHecwut3bs4PvvGDgAYW5EtWJoArKuVj1zTodWDwnsM8gRUvsEVMSMYYU%2BWICq6HNCBjnjIPZoL%2FgVWk3cjCOIZxlrJwcr2KHldmQGmV5jqwZBJ76ARjymTvmYA58AoPn7hZQT8tFZ3y3nDEBwNG%2FvUpPzkoXx6Lx%2BmsCq94WQPJJrbEeZyq10HwBtshbs62E8aWArG%2FOsA%2BRlz%2F9r5l%2BmOsQsDFzoKkbbZadGbzRUqsE4WpUq37oEQlxsm7z4Q%2BllPQmAkv2LdIb4TNqBQGY8ZXYXPttXT5z%2FRKxn3KUdISYGC6slgSowVcDZs9KGrbzdFtdoSL4%2B31NKENW0HJ6UayE%2FjRMcsNLyDgGcJmoFri3Wa%2Ft7WyiFkJE2d%2BnximWkl7p%2BmgkxDflVCwYaS1ErjLJrCa7DoSYHw0Sf%2FhJ%2BTMzEg7mGAZ5dEwMJ%2BFusIGOqUBHeAPBqGGzEHAFaK0Odf7%2BZTuJLzEFYLnt%2F%2B1kBnVqVsM4AX%2BC5Ce6iDyW35d3bALlQphoFC7lcQa66EI2UMC7%2BSfnTmsV0TId0SEGTMRFdzH8fWyIBtUW5d1Xdwn3zgOjWZIQvOVyg6jWq3LZfA0xWiz%2BuZu8IAsbR1%2FoWkxp%2Bb32y1E2nye2rIuxj1JQEkHL5oZ181MZQ1ZTNddtrzDK6vF6vdd&X-Amz-Signature=866befc3a1be3029ee0c5b25e77a163816b53c55dc77feab6d876aa13118d913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
