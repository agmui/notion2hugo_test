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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA6IATVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIAHAaTAC4lMZKsmVt6oDZ5sk1r6ujTqJzkZSI7p7wsYmAiBYJE7Bb3q1VphztqDDcezCZC4cKjIn0G1oLQ5%2FQoC6Fyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMKlhk8iYKWdAFQ7bNKtwDCXK1T6RCfwbDrSKLdZTHymJohF5goFHW%2BTgK4yV2waqhRPtbVX%2FW6lpgpIa3LFYrb4usrdj80E9JqShDFHo2L4NSpXOOh6c%2BzxbFqaoY73jeQ4O9kaS8Dye%2FFu8NDdob3AzRoqpxGrdn%2BwJrT%2BMg0TUZmBxuHzyJ%2FdMkG0w6c3GWcrLCA7g0svciKZzjSRccr36PhNCghcgP5djdmiFoukDjHlv0M1pIsc9za6crYNKt67D0ADqMYbI0AsZDM0UmQssdft9IB2ouFE9ptJKFi1gv3gA1e%2FnOfTUfgiSdGYmM7lk7Y3u1TsUnHJg4oIVBBolmbRxIbA7WZjWTox70Xrsqsw6WbjArBbuaRNS83Xddjmizk704%2BuojZUsXRVSRJHB5KMfZ95kDtNFXebK1zHmjy6POFKB9nuZMBRTBx%2BgDISWmvkOJ%2FKJt2R%2BAv1v4wlPiJ7XKAm4g3fqvTow9RtFtoChPqBtG9jUEniN5YRrQNODjcY9lKlmZ5fjBHVGVUAbelQIMoyuE7hol%2Bw20KBkUpLx%2Bb5GbL7mtsVTlIFE4gcWK5YK49UF6jdJq7MhaP09ZG2t1ENeyIc82KpP0Qgd7SIp3iPFPwmWEMbeMAZeiZOFghB04fnPjvSkwq8maxAY6pgElBnLGnjeSf2OmLFlJB%2B%2F94YXnfYQbU21hEnPEue0%2FWrY7g5civlEvvAPirHGzI1G0iCCw3xFfcwDNOASucmVpNho%2FFJiN7Q5MZyzlQQO1UljOR4SNR3QaxNU3UPMNTb1j6UwPe9pqUJ2WOAvyz6rHw%2Ft%2BQXb1WGDvO0wfo8q2ygXasXlFsK8C36fZrI9f1sYPe%2FjZkin7TItKRDuozFYKm%2BNcr9Or&X-Amz-Signature=cacfe447fad245645c50fef6344851758046ec9bcadb854954f42771b056a5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA6IATVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIAHAaTAC4lMZKsmVt6oDZ5sk1r6ujTqJzkZSI7p7wsYmAiBYJE7Bb3q1VphztqDDcezCZC4cKjIn0G1oLQ5%2FQoC6Fyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMKlhk8iYKWdAFQ7bNKtwDCXK1T6RCfwbDrSKLdZTHymJohF5goFHW%2BTgK4yV2waqhRPtbVX%2FW6lpgpIa3LFYrb4usrdj80E9JqShDFHo2L4NSpXOOh6c%2BzxbFqaoY73jeQ4O9kaS8Dye%2FFu8NDdob3AzRoqpxGrdn%2BwJrT%2BMg0TUZmBxuHzyJ%2FdMkG0w6c3GWcrLCA7g0svciKZzjSRccr36PhNCghcgP5djdmiFoukDjHlv0M1pIsc9za6crYNKt67D0ADqMYbI0AsZDM0UmQssdft9IB2ouFE9ptJKFi1gv3gA1e%2FnOfTUfgiSdGYmM7lk7Y3u1TsUnHJg4oIVBBolmbRxIbA7WZjWTox70Xrsqsw6WbjArBbuaRNS83Xddjmizk704%2BuojZUsXRVSRJHB5KMfZ95kDtNFXebK1zHmjy6POFKB9nuZMBRTBx%2BgDISWmvkOJ%2FKJt2R%2BAv1v4wlPiJ7XKAm4g3fqvTow9RtFtoChPqBtG9jUEniN5YRrQNODjcY9lKlmZ5fjBHVGVUAbelQIMoyuE7hol%2Bw20KBkUpLx%2Bb5GbL7mtsVTlIFE4gcWK5YK49UF6jdJq7MhaP09ZG2t1ENeyIc82KpP0Qgd7SIp3iPFPwmWEMbeMAZeiZOFghB04fnPjvSkwq8maxAY6pgElBnLGnjeSf2OmLFlJB%2B%2F94YXnfYQbU21hEnPEue0%2FWrY7g5civlEvvAPirHGzI1G0iCCw3xFfcwDNOASucmVpNho%2FFJiN7Q5MZyzlQQO1UljOR4SNR3QaxNU3UPMNTb1j6UwPe9pqUJ2WOAvyz6rHw%2Ft%2BQXb1WGDvO0wfo8q2ygXasXlFsK8C36fZrI9f1sYPe%2FjZkin7TItKRDuozFYKm%2BNcr9Or&X-Amz-Signature=99a8bdcbd22a274f856731dd0dd810402e25684f9fac9e64a65ad8795e2e8b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
