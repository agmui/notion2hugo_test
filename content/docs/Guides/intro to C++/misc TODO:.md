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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=cdc4101404dad4342434bf8576f5d319b3820d34bf89dee468cb7cd7678ce478&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=d1f62926e382e4015c1e61ffc4adc9e49293942674c3f58c8a14f7ef66f0dd74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
